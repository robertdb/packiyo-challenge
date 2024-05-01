import { addOrder, getOrders } from "@/actions/order";
import { api } from "@/lib/api";
import { API_RESOURCE } from "@/lib/contants";


jest.mock('../../lib/api');

jest.mock('next/cache', () => ({
  revalidatePath: jest.fn(),
}));

describe('Order API', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should add an order', async () => {
    const mockResponse = { status: 200 };
    (api as jest.MockedFunction<typeof api>).mockResolvedValueOnce(mockResponse);

    const formData = new FormData();
    formData.append('orderNumber', '123');
    formData.append('products', JSON.stringify([{ id: '1', attributes: { quantity_available: 10 } }]));

    const response = await addOrder({}, formData);
    expect(response).toEqual(mockResponse);
    expect(api).toHaveBeenCalledWith(API_RESOURCE.ORDER, 'POST', expect.any(Object));
  });

  it('should get orders', async () => {
    const mockResponse = { data: [], status: 200 };
    (api as jest.MockedFunction<typeof api>).mockResolvedValueOnce(mockResponse);

    const response = await getOrders();
    expect(response).toEqual(mockResponse);
    expect(api).toHaveBeenCalledWith(API_RESOURCE.ORDER, 'GET');
  });
});