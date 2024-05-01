import { ProductForm } from '@/components/ProductForm';
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

describe('ProductForm', () => {
  it('matches snapshot', () => {
    const mockOnCloseDialog = jest.fn();
    const { asFragment } = render(<ProductForm onCloseDialog={mockOnCloseDialog} />);
    expect(asFragment()).toMatchSnapshot();
  });
});