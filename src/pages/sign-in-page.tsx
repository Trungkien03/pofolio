import LoginForm from '@/components/auth/sign-in-form';

const SignInPage = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-6 bg-background p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <LoginForm />
      </div>
    </div>
  );
};

export default SignInPage;
