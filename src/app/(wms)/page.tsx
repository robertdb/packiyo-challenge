import { getProducts } from '@/actions/product';
import { ProductTable } from '@/components/ProductTable';
import { TableSkeleton } from '@/components/ui/table';
import { Suspense } from 'react';
import { PageHeader } from './_PageHeader';

const ProductsSuspense = async () => {
  const response = await getProducts();

  return <ProductTable products={response?.data} />;
};

const Products = () => {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <PageHeader />
      <Suspense fallback={<TableSkeleton />}>
        <ProductsSuspense />
      </Suspense>
    </main>
  );
};

export default Products;
