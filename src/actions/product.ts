'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { api } from '@/lib/api';
import { API_RESOURCE, GLOBAL_ERROR } from '@/lib/contants';
import { ParamsProduct, Product, ProductErrorValidation, Response } from '@/lib/type';

const addSchema = z.object({
  sku: z.string().min(1, 'SKU must contain at least 1 character(s)'),
  name: z.string().min(1, 'Name must contain at least 1 character(s)'),
});

export const addProduct = async (
  prevState: unknown,
  formData: FormData,
): Promise<Response<{}, ProductErrorValidation>> => {
  try {
    const params = Object.fromEntries(formData.entries());
    const result = addSchema.safeParse(params);

    if (result.success === false) {
      return { error: result.error.formErrors.fieldErrors };
    }

    const body = {
      data: {
        type: 'products',
        attributes: {
          sku: params.sku,
          name: params.name,
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

    const response = await api(API_RESOURCE.PRODUCT, 'POST', body);

    if (response.error) {
      return { error: { server: response.error } };
    }

    revalidatePath('/');

    return { status: 200 };
  } catch (error) {
    console.error(error);
    return GLOBAL_ERROR;
  }
};

export const getProducts = async (
  params?: ParamsProduct,
): Promise<Response<Product[], ProductErrorValidation>> => {
  try {
    const response = await api(API_RESOURCE.PRODUCT, 'GET');

    if (params?.filter) {
      response.data = response.data.filter(
        (product: Pick<Product, 'attributes'>) =>
          product.attributes.sku.includes(params.filter) ||
          product.attributes.name.includes(params.filter),
      );
    }

    return { data: response.data, status: 200 };
  } catch (error) {
    console.error(error);
    return GLOBAL_ERROR;
  }
};
