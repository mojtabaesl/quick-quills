import { BaseSideBar } from '@/ui/components/BaseSideBar';
import type { Link } from '@/ui/components/Navigation';
import { BackpackIcon, BookIcon, HomeIcon, ListTodoIcon } from '@/ui/icons';

const links: Link[] = [
  { to: '/home', icon: <HomeIcon />, label: 'Home' },
  { to: '/todo', icon: <ListTodoIcon />, label: 'Todo List' },
  { to: '/inventory', icon: <BackpackIcon />, label: 'My Inventory' },
  { to: '/books', icon: <BookIcon />, label: 'All Books' },
];

export function SideBar() {
  return <BaseSideBar links={links} />;
}
