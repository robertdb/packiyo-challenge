import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Order } from '@/lib/type';

import { EyeOpenIcon } from '@radix-ui/react-icons';

interface OrderDetailProps {
  order: Order;
}

export const OrderDetail = ({ order }: OrderDetailProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon">
        <EyeOpenIcon className="h-4 w-4" />
      </Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader className="h-full">
        <SheetTitle>Order Detail</SheetTitle>
        <div className="h-full divide-y divide-gray-200 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {Object.entries(order.attributes).map(([key, value]) => (
            <div key={key} className="flex justify-between py-4">
              <span className="text-sm font-medium capitalize text-gray-500">{key}</span>
              <span className="text-sm text-gray-900">
                {value !== null ? value?.toString() : '-'}
              </span>
            </div>
          ))}
        </div>
      </SheetHeader>
    </SheetContent>
  </Sheet>
);
