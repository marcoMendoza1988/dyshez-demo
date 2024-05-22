'use client'
import { useRouter, usePathname } from 'next/navigation';
import Icon from '@/components/atoms/Icon';
import Link from 'next/link';
import { useEffect } from 'react';

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const router = useRouter();
  const pathName = usePathname();
  const isActive = pathName === href;
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
    >
      <Icon name={icon} active={isActive} />
      <div className="absolute inset-y-0 left-12 hidden items-center group-hover:flex">
        <div className="relative whitespace-nowrap rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 drop-shadow-lg">
          <div className="absolute inset-0 -left-1 flex items-center">
            <div className="h-2 w-2 rotate-45 bg-white"></div>
          </div>
          {label}
        </div>
      </div>
    </Link>
  );
};

export default NavLink;
