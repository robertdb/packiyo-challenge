import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { useDebouncedSearch } from '@/hooks/useDebounce';

import { Product } from '@/lib/type';
import useFetchProductsByQuery from './useFetchProductsByQuery';

interface ProductSelectProps {
  onSelectedProducts: (selected: Product) => void;
  selectedProducts: Product[];
}
export const ProducSelect = ({ onSelectedProducts, selectedProducts }: ProductSelectProps) => {
  const [searchTerm, handleSearchTermChange] = useDebouncedSearch();
  const { isFetchingProducts, products } = useFetchProductsByQuery(searchTerm);

  const handleSearch = (search: string) => {
    handleSearchTermChange(search);
  };

  const handleNewSelecter = (event: React.MouseEvent<HTMLElement>, selected: Product) => {
    event.preventDefault();

    if (selectedProducts.find((product) => product.id === selected.id)) {
      return;
    }

    onSelectedProducts(selected);
    handleSearchTermChange('');
  };

  const getItems = () => {
    if (isFetchingProducts) {
      return (
        <CommandItem key="searching" value="Searching Products" aria-placeholder="">
          Searching Product
        </CommandItem>
      );
    }

    if (products?.length) {
      return products?.map((product: Product) => {
        return (
          <CommandItem
            key={`word-${product?.id}`}
            value={product?.attributes?.name}
            className="!pointer-events-auto p-0"
          >
            <Button
              onClick={(e) => {
                handleNewSelecter(e, product);
              }}
              variant="ghost"
              className="p-0 pl-4"
            >
              {product?.attributes?.name}
            </Button>
          </CommandItem>
        );
      });
    }

    if (Array.isArray(products)) return <CommandEmpty>No results found.</CommandEmpty>;

    return null;
  };

  return (
    <Command className="h-40 rounded-lg border shadow-md" shouldFilter={false}>
      <CommandInput onValueChange={handleSearch} />
      <CommandList>
        <CommandGroup heading="Select your Products">{getItems()}</CommandGroup>
      </CommandList>
    </Command>
  );
};
