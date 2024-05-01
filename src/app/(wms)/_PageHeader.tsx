'use client';

import { useState } from 'react';

import { ProductForm } from '@/components/ProductForm';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export const PageHeader = () => {
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);

  return (
    <div className="flex w-full justify-between py-6">
      <h1 className="mb-4 text-4xl">Products</h1>
      <Dialog open={isProductDialogOpen} onOpenChange={(open) => setIsProductDialogOpen(open)}>
        <Button variant="outline" onClick={() => setIsProductDialogOpen(true)}>
          Create Product
        </Button>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create Product</DialogTitle>
          </DialogHeader>
          <ProductForm onCloseDialog={() => setIsProductDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
