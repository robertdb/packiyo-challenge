import { Order } from '@/lib/type';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { OrderDetail } from '../OrderDetail ';

interface OrderTableProps {
  orders?: Order[];
}

export const OrderTable = ({ orders }: OrderTableProps) => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Detail</TableHead>
        <TableHead>Number</TableHead>
        <TableHead>Status</TableHead>
        <TableHead>Created</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {orders?.map((order: Order) => (
        <TableRow key={order.id}>
          <TableCell>
            <OrderDetail order={order} />
          </TableCell>
          <TableCell>{order.attributes.number}</TableCell>
          <TableCell>{order.attributes.status_text}</TableCell>
          <TableCell>{`${new Date(order.attributes.created_at)}`}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);
