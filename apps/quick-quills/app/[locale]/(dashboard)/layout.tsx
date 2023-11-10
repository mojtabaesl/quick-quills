import { AppSurface } from '@/ui/components/AppSurface';
import { SideBar } from './SideBar';
import { Main } from './Main';

interface LocalLayoutProps {
  children: React.ReactNode;
}

export default function LocalLayout({ children }: LocalLayoutProps) {
  return (
    <AppSurface>
      <SideBar />
      <Main>{children}</Main>
    </AppSurface>
  );
}
