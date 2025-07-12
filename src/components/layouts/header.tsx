import AppBreadcrumb from '../app-breadcrumb';
import { ModeToggle } from '../mode-toggle';
import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';
import { UserNav } from './user-nav';

export default function Header() {
  return (
    <header className='group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear'>
      <div className='flex items-center gap-2 px-4'>
        <SidebarTrigger className='-ml-1' />
        <Separator orientation='vertical' className='mr-2 h-4' />
        <AppBreadcrumb />
      </div>

      <div className='flex items-center gap-2 px-4'>
        <ModeToggle />
        <UserNav />
      </div>
    </header>
  );
}
