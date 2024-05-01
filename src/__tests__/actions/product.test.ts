
import { addProduct, getProducts } from '@/actions/product';
import { api } from '@/lib/api';
import { API_RESOURCE } from '@/lib/contants';

jest.mock('../../lib/api');

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));


describe('Product API', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should add a product', async () => {
    const mockResponse = { status: 200 };
    (api as jest.MockedFunction<typeof api>).mockResolvedValueOnce(mockResponse);

    const formData = new FormData();
    formData.append('sku', '123');
    formData.append('name', 'Test Product');

    const response = await addProduct({}, formData);
    expect(response).toEqual(mockResponse);
    expect(api).toHaveBeenCalledWith(API_RESOURCE.PRODUCT, 'POST', expect.any(Object));
  });

  it('should get products', async () => {
    const mockResponse = { data: [], status: 200 };
    (api as jest.MockedFunction<typeof api>).mockResolvedValueOnce(mockResponse);

    const response = await getProducts();
    expect(response).toEqual(mockResponse);
    expect(api).toHaveBeenCalledWith(API_RESOURCE.PRODUCT, 'GET');
  });
});
