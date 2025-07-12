'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { AUTH_ACTION } from '@/context/types/auth.types';
import useAuthContext from '@/hooks/use-auth-context';
import { signInWithGoogle } from '@/lib/firebase/auth';
import { cn } from '@/lib/utils';
import { getAdditionalUserInfo } from 'firebase/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

const LoginForm = ({ className, ...props }: React.ComponentProps<'div'>) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const router = useRouter();

  const { dispatch } = useAuthContext();

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      const result = await signInWithGoogle();
      if (result) {
        const user = await getAdditionalUserInfo(result);
        console.log('user', user);
        dispatch({
          type: AUTH_ACTION.SET_USER,
          payload: {
            id: result.user.uid,
            email: result.user.email || '',
            fullName: result.user.displayName || '',
            image_url: result.user.photoURL || '',
          },
        });
        router.push('/dashboard');
      }
    } catch (error) {
      toast.error('Google sign in error', {
        description: 'Please try again',
      });
      console.error('Google sign in error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // TODO: Implement email/password sign in
    console.log('Email sign in:', email);

    setIsLoading(false);
  };

  return (
    <div
      className={cn(
        'mx-auto flex w-full max-w-sm flex-col gap-4 px-4 sm:gap-6 sm:px-0',
        className,
      )}
      {...props}
    >
      <form className='w-full' onSubmit={handleEmailSignIn}>
        <div className='flex flex-col gap-4 sm:gap-6'>
          <div className='flex flex-col items-center gap-2 sm:gap-3'>
            <a
              href='#'
              className='flex flex-col items-center gap-2 font-medium'
            ></a>
            <h1 className='text-center text-lg font-bold sm:text-xl lg:text-2xl'>
              Sign In
            </h1>
          </div>
          <div className='flex flex-col gap-4 sm:gap-6'>
            <div className='grid gap-2 sm:gap-3'>
              <Label htmlFor='email' className='text-sm sm:text-base'>
                Email
              </Label>
              <Input
                id='email'
                type='email'
                placeholder='m@example.com'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='h-10 text-sm sm:h-11 sm:text-base'
              />
            </div>
            <Button
              type='submit'
              disabled={isLoading}
              className='h-10 w-full text-sm font-medium sm:h-11 sm:text-base'
            >
              {isLoading ? 'Signing in...' : 'Login'}
            </Button>
          </div>
          <div className='relative text-center text-xs after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border sm:text-sm'>
            <span className='relative z-10 bg-background px-2 text-muted-foreground sm:px-3'>
              Or
            </span>
          </div>
          <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4'>
            <Button
              variant='outline'
              type='button'
              disabled={isLoading}
              className='flex h-10 w-full items-center justify-center gap-2 rounded-lg border-gray-300 bg-white text-xs font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:h-11 sm:text-sm'
            >
              <Image
                src='/apple_icon.svg'
                alt='Apple'
                width={16}
                height={16}
                className='h-4 w-4 sm:h-5 sm:w-5'
              />
              <span className='hidden sm:inline'>Continue with Apple</span>
              <span className='sm:hidden'>Apple</span>
            </Button>
            <Button
              variant='outline'
              type='button'
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className='flex h-10 w-full items-center justify-center gap-2 rounded-lg border-gray-300 bg-white text-xs font-medium text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 sm:h-11 sm:text-sm'
            >
              <Image
                src='/google_icon.svg'
                alt='Google'
                width={16}
                height={16}
                className='h-4 w-4 sm:h-5 sm:w-5'
              />
              <span className='hidden sm:inline'>
                {isLoading ? 'Signing in...' : 'Continue with Google'}
              </span>
              <span className='sm:hidden'>
                {isLoading ? 'Signing in...' : 'Google'}
              </span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
