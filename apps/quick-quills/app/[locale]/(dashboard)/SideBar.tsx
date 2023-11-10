import { BaseSideBar } from '@/ui/components/BaseSideBar/BaseSideBar';
import type { NavLink } from '@/ui/components/Navigation/Navigation';
import { BackpackIcon, BookIcon, HomeIcon, ListTodoIcon } from '@/ui/icons';

const links: NavLink[] = [
  { to: '/home', icon: <HomeIcon />, label: 'home' },
  { to: '/todo', icon: <ListTodoIcon />, label: 'todo' },
  { to: '/inventory', icon: <BackpackIcon />, label: 'inventory' },
  { to: '/books', icon: <BookIcon />, label: 'books' },
];

export function SideBar() {
  return <BaseSideBar links={links} />;
}
