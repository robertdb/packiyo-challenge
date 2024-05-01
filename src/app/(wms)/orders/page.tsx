import { getOrders } from '@/actions/order';
import { OrderTable } from '@/components/OrderTable';
import { TableSkeleton } from '@/components/ui/table';
import { Suspense } from 'react';
import { PageHeader } from './_PageHeader';

const OrdersSuspense = async () => {
  const response = await getOrders();
  return <OrderTable orders={response?.data} />;
};

const Orders = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <PageHeader />
      <Suspense fallback={<TableSkeleton />}>
        <OrdersSuspense />
      </Suspense>
    </main>
  );
};

export default Orders;
