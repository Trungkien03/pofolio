import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import AppSidebar from '@/components/layouts/app-sidebar';
import Header from '@/components/layouts/header';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <SidebarInset>
        <Header />
        {/* page main content */}
        {children}
        {/* page main content ends */}
      </SidebarInset>
    </SidebarProvider>
  );
}
