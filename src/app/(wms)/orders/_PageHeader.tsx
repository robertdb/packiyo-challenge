'use client';

import { OrderForm } from '@/components/OrderForm';
import { Button } from '@/components/ui/button';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useState } from 'react';

export const PageHeader = () => {
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);

  return (
    <div className="flex w-full justify-between py-6">
      <h1 className="mb-4 text-4xl">Orders</h1>
      <Dialog open={isOrderDialogOpen} onOpenChange={(open) => setIsOrderDialogOpen(open)}>
        <Button variant="outline" onClick={() => setIsOrderDialogOpen(true)}>
          Create Order
        </Button>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Create Order</DialogTitle>
          </DialogHeader>
          <OrderForm onCloseDialog={() => setIsOrderDialogOpen(false)} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
