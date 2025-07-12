import UserProfile from '@/components/auth/user-profile';

export default function DashboardPage() {
  return (
    <div className='container mx-auto py-8'>
      <div className='mx-auto max-w-md'>
        <h1 className='mb-6 text-center text-2xl font-bold'>Dashboard</h1>
        <UserProfile />
      </div>
    </div>
  );
}
