import { ProductDetail } from '@/components/ProductDetail';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Product } from '@/lib/type';

interface ProductTableProps {
  products?: Product[];
}

export const ProductTable = ({ products }: ProductTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Detail</TableHead>
          <TableHead>SKU</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Type</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.map((product) => (
          <TableRow key={product.id}>
            <TableCell>
              <ProductDetail product={product} />
            </TableCell>
            <TableCell>{product.attributes.sku}</TableCell>
            <TableCell>{product.attributes.name}</TableCell>
            <TableCell>{product.attributes.price}</TableCell>
            <TableCell>{product.attributes.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
