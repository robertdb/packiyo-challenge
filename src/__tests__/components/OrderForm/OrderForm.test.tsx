import { OrderForm } from '@/components/OrderForm';
import { render } from '@testing-library/react';

jest.mock("react-dom", () => ({
  ...jest.requireActual("react-dom"),
  useFormState: () => [() => {}, null],
  useFormStatus: () => [() => {}, null],
}));

window.ResizeObserver =
    window.ResizeObserver ||
    jest.fn().mockImplementation(() => ({
        disconnect: jest.fn(),
        observe: jest.fn(),
        unobserve: jest.fn(),
    }));

describe('OrderForm', () => {
  it('matches snapshot', () => {
    const mockOnCloseDialog = jest.fn();
    const { asFragment } = render(<OrderForm onCloseDialog={mockOnCloseDialog} />);
    expect(asFragment()).toMatchSnapshot();
  });
});