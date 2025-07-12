import dynamic from 'next/dynamic';

export const metadata = {
  title: 'Sign In',
  description: 'Sign In to your account',
};

const SignInPage = dynamic(() => import('@/pages/sign-in-page'));

export default async function Page() {
  return <SignInPage />;
}
