'use client';

import { addProduct } from '@/actions/product';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/useToast';
import { ReloadIcon } from '@radix-ui/react-icons';
import { Label } from '@radix-ui/react-label';
import { useMemo } from 'react';
import { useFormState, useFormStatus } from 'react-dom';

interface ProductFormProps {
  onCloseDialog: () => void;
}

interface SubmitButtonProps extends ProductFormProps {
  close: boolean;
}

const SubmitButton = ({ close, onCloseDialog }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  useMemo(() => {
    if (close && !pending) {
      onCloseDialog();
    }
  }, [close, pending]);

  return (
    <Button type="submit" disabled={pending}>
      Save {pending && <ReloadIcon className="ml-2 animate-spin" />}
    </Button>
  );
};

export const ProductForm = ({ onCloseDialog }: ProductFormProps) => {
  const [data, action] = useFormState(addProduct, {});

  useToast(data.error?.server, data?.status === 200 && !data.error ? 'Product Created' : undefined);

  return (
    <form action={action} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">SKU</Label>
        <Input type="text" id="sku" name="sku" />
        {data?.error?.sku && <div className="text-destructive">{data?.error?.sku}</div>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" />
        {data?.error?.name && <div className="text-destructive">{data?.error?.name}</div>}
      </div>
      <SubmitButton close={data?.status === 200} onCloseDialog={onCloseDialog} />
    </form>
  );
};
