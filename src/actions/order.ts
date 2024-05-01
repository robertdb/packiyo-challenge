'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { api } from '@/lib/api';
import { API_RESOURCE, GLOBAL_ERROR } from '@/lib/contants';
import { Order, OrderErrorValidation, Product, Response } from '@/lib/type';

const addSchema = z.object({
  orderNumber: z.string().min(1, 'Number must contain at least 1 character(s)'),
});

export const addOrder = async (
  prevState: unknown,
  formData: FormData,
): Promise<Response<{ status: number }, OrderErrorValidation>> => {
  try {
    const { products, orderNumber } = Object.fromEntries(formData.entries());
    const result = addSchema.safeParse({ orderNumber });

    const productsParse = JSON.parse(products as string);

    let validation = { error: {}, success: true };

    if (result.success === false) {
      validation = { error: result.error.formErrors.fieldErrors, success: false };
    }

    if (!productsParse.length) {
      validation = {
        error: { ...validation?.error, products: 'Select at least one product' },
        success: false,
      };
    }

    if (!validation.success) {
      return { error: validation.error, status: 400 };
    }

    const order_item_data = productsParse.map((product: Product) => ({
      id: product.id,
      ...product.attributes,
      quantity: product.attributes.quantity_available,
    }));

    const body = {
      data: {
        type: 'orders',
        attributes: {
          number: orderNumber,
          order_item_data,
        },
        relationships: {
          customer: {
            data: {
              type: 'customers',
              id: '17',
            },
          },
        },
      },
    };

    const response = await api(API_RESOURCE.ORDER, 'POST', body);

    if (response.error) {
      return { error: { server: response.error } };
    }

    revalidatePath('/orders');

    return { status: 200 };
  } catch (error) {
    console.error(error);
    return GLOBAL_ERROR;
  }
};

export const getOrders = async (): Promise<Response<Order[], OrderErrorValidation>> => {
  try {
    const response = await api(API_RESOURCE.ORDER, 'GET');

    return {
      data: response.data,
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return GLOBAL_ERROR;
  }
};
