import { OrderTable } from '@/components/OrderTable';
import { Order } from '@/lib/type';
import { render, screen } from '@testing-library/react';

describe('OrderTable', () => {
  const mockOrders = [
    {
      id: '1',
      attributes: {
        number: '123',
        status_text: 'Processing',
      },
    },
    {
      id: '2',
      attributes: {
        number: '456',
        status_text: 'Shipped',
      },
    },
  ] as Order[];

  it('renders the table with multiple orders', () => {
    render(<OrderTable orders={mockOrders} />);

    expect(screen.getByText('123')).toBeInTheDocument();
    expect(screen.getByText('Processing')).toBeInTheDocument();

    expect(screen.getByText('456')).toBeInTheDocument();
    expect(screen.getByText('Shipped')).toBeInTheDocument();
  });

});