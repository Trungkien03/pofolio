'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AUTH_ACTION } from '@/context/types/auth.types';
import useAuthContext from '@/hooks/use-auth-context';
import { signOutWithGoogle } from '@/lib/firebase/auth';
import { useRouter } from 'next/navigation';

const UserProfile = () => {
  const { state, dispatch } = useAuthContext();
  const { user, isLoading } = state;
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOutWithGoogle();
      dispatch({
        type: AUTH_ACTION.SET_USER,
        payload: null,
      });
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardContent className='p-6'>
          <div className='animate-pulse'>
            <div className='mb-2 h-4 w-3/4 rounded bg-gray-200'></div>
            <div className='h-4 w-1/2 rounded bg-gray-200'></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Authentication Required</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='text-muted-foreground'>
            Please sign in to view your profile.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        <div className='flex items-center space-x-4'>
          <Avatar className='h-16 w-16'>
            <AvatarImage
              src={user.image_url || undefined}
              alt={user.fullName}
            />
            <AvatarFallback>{user.fullName?.charAt(0) || 'U'}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className='text-lg font-semibold'>{user.fullName}</h3>
            <p className='text-muted-foreground'>{user.email}</p>
          </div>
        </div>

        <div className='pt-4'>
          <Button onClick={handleSignOut} variant='outline' className='w-full'>
            Sign Out
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
