import { ServerError } from './type';

export const API_RESOURCE = {
  PRODUCT: '/products',
  ORDER: '/orders',
} as const;

export const GLOBAL_ERROR: { error: { server: ServerError[] } } = {
  error: {
    server: [
      {
        detail: 'There was a problem with your request.',
        source: undefined,
        status: 500,
        title: 'Uh oh! Something went wrong.',
      },
    ],
  },
};
