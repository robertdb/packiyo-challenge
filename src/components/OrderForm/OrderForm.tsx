'use client';

import { useMemo, useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

import { addOrder } from '@/actions/order';
import { CandidateProductTable, ProducSelect } from '@/components/ProducSelect';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/useToast';
import { Product } from '@/lib/type';
import { ReloadIcon } from '@radix-ui/react-icons';

export interface ProductSelected extends Product {
  selected: boolean;
}

interface OrderFormProps {
  onCloseDialog: () => void;
}

interface SubmitButtonProps extends OrderFormProps {
  close: boolean;
}

const SubmitButton = ({ close, onCloseDialog }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  if (close) {
    onCloseDialog();
  }

  return (
    <Button type="submit" disabled={pending}>
      Save {pending && <ReloadIcon className="ml-2 animate-spin" />}
    </Button>
  );
};

export const OrderForm = ({ onCloseDialog }: OrderFormProps) => {
  const [selectedProducts, setSelectedProducts] = useState<ProductSelected[]>([]);
  const [data, action] = useFormState(addOrder, {});

  const candidates = useMemo(() => {
    return selectedProducts.map((p: ProductSelected) => ({
      id: p.id,
      sku: p.attributes.sku,
      name: p.attributes.name,
    }));
  }, [selectedProducts]);

  useToast(data.error?.server, data?.status === 200 && !data.error ? 'Order Created' : undefined);

  const handleSelectedProduct = (product: Product) => {
    setSelectedProducts([...selectedProducts, { ...product, selected: false }]);
  };

  return (
    <form action={action} className="w-ful min-h-[600px] space-y-8">
      <div className="space-y-2">
        <Label htmlFor="orderNumber">Number</Label>
        <Input type="text" id="orderNumber" name="orderNumber" />
        {data?.error?.orderNumber && (
          <div className="text-destructive">{data?.error?.orderNumber}</div>
        )}
      </div>
      <ProducSelect
        onSelectedProducts={handleSelectedProduct}
        selectedProducts={selectedProducts}
      />
      <CandidateProductTable candidates={candidates} setSelectedProducts={setSelectedProducts} />
      {data?.error?.products && <div className="text-destructive">{data?.error?.products}</div>}
      <input
        type="hidden"
        name="products"
        value={JSON.stringify(selectedProducts.filter((p) => p.selected))}
      />
      <SubmitButton close={data.status === 200} onCloseDialog={onCloseDialog} />
    </form>
  );
};
