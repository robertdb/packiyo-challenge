import { ProductTable } from '@/components/ProductTable';
import { Product } from '@/lib/type';
import { render, screen } from '@testing-library/react';


describe('ProductTable', () => {
  const mockProducts = [
    {
      id: '1',
      attributes: {
        sku: 'ABC123',
        name: 'Product 1',
        price: '100',
        type: 'Type 1',
      },
    },
  ] as Product[];

  it('renders the table with product details', () => {
    render(<ProductTable products={mockProducts} />);

    expect(screen.getByText('Detail')).toBeInTheDocument();
    expect(screen.getByText('SKU')).toBeInTheDocument();
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Price')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();

    // Check for product details
    expect(screen.getByText('ABC123')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Type 1')).toBeInTheDocument();
  });
});