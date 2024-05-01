import { Navigation, NavLink } from '@/components/Navigation';
import { PropsWithChildren } from 'react';
import { Toaster } from '@/components/ui/sonner';

export default function Layout({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Navigation>
        <NavLink href="/">Products</NavLink>
        <NavLink href="/orders">Orders</NavLink>
      </Navigation>
      <div className="bg-gray-100">
        <div className="container bg-gray-50">{children}</div>
      </div>
    </>
  );
}
