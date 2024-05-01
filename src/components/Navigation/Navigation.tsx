'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

import { ComponentProps, PropsWithChildren } from 'react';

export const Navigation = ({ children }: PropsWithChildren) => (
  <nav className="bg-primary">
    <div className="container px-0 py-4 text-primary-foreground">{children}</div>
  </nav>
);

export const NavLink = (props: Omit<ComponentProps<typeof Link>, 'className'>) => {
  const pathname = usePathname();
  const isCurrentPath = pathname === props.href;

  return (
    <Link
      {...props}
      className={cn(
        'p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground border-2 border-black',
        isCurrentPath && 'bg-background text-foreground',
      )}
    />
  );
};
