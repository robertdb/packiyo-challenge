import { useEffect, useState } from 'react';

import { getProducts } from '@/actions/product';
import { Product } from '@/lib/type';

const useFetchProductsByQuery = (query: string) => {
  const [isFetchingProducts, setIsFetchingProducts] = useState(false);
  const [products, setProducts] = useState<Product[]>();

  const fetchProductsByQuery = async (query: string) => {
    if (!query) return [];
    setIsFetchingProducts(true);
    const productsByquery = await getProducts({ filter: query });
    setProducts(productsByquery?.data);
    setIsFetchingProducts(false);
  };

  useEffect(() => {
    fetchProductsByQuery(query);
  }, [query]);

  return { isFetchingProducts, products };
};

export default useFetchProductsByQuery;
