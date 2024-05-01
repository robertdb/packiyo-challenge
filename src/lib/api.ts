export const api = async (url: string, method: 'GET' | 'POST', body?: Record<'data', any>) => {
  const options: RequestInit = {
    method,
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      Authorization: `Bearer ${process.env.TOKEN_HARDCODE}`,
    },
  };

  try {
    if (method === 'POST' && body) {
      options.body = JSON.stringify(body);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}${url}`, options);

    return await response.json();
  } catch (error) {
    throw error;
  }
};
