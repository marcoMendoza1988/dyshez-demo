import Logo from '@/components/atoms/Logo';
import NavLink from '@/components/molecules/NavLink';
import ProfileActions from '@/components/molecules/ProfileActions';

const Sidebar = () => (
  <aside className="flex h-screen w-20 flex-col items-center border-r border-gray-200 bg-white">
    <Logo />
    <nav className="flex flex-1 flex-col gap-y-4 pt-10">
      <NavLink href="/orders" icon="orders" label="Orders" />
      <NavLink href="/pictures" icon="pictures" label="Pictures" />
    </nav>
    <ProfileActions />
  </aside>
);

export default Sidebar;
