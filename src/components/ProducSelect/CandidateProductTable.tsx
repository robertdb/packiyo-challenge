'use client';

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { ProductSelected } from '@/components/OrderForm';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export interface TableProduct {
  id: string;
  sku: string;
  name: string;
}

const columns: ColumnDef<TableProduct>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'sku',
    header: 'SKU',
    cell: ({ row }) => <div className="lowercase">{row.getValue('sku')}</div>,
  },
  {
    accessorKey: 'name',
    header: 'Name',
    cell: ({ row }) => <div className="lowercase">{row.getValue('name')}</div>,
  },
];

interface CandidateProductTableProps {
  candidates: TableProduct[];
  setSelectedProducts: React.Dispatch<React.SetStateAction<ProductSelected[]>>;
}

export const CandidateProductTable = ({
  candidates,
  setSelectedProducts,
}: CandidateProductTableProps) => {
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data: candidates,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });

  useEffect(() => {
    const rowsId = table.getRowModel().rowsById;
    const result: {
      [id: ProductSelected['id']]: boolean;
    } = {};

    for (const key in rowSelection) {
      const product = rowsId[key].original;
      result[product.id] = true;
    }

    setSelectedProducts((prevState: ProductSelected[]): ProductSelected[] => {
      return prevState.map((product: ProductSelected) => {
        if (result[product.id]) {
          return { ...product, selected: true } as ProductSelected;
        } else {
          return { ...product, selected: false } as ProductSelected;
        }
      });
    });
  }, [rowSelection]);

  return (
    <div className="w-ful my-2">
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
