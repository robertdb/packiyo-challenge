export interface Response<Data, Error> {
  data?: Data;
  error?: Error;
  status?: number;
}

export interface ServerError {
  detail: string;
  source?: {
    pointer: string;
  };
  status: number;
  title: string;
}

// Order Types
export interface OrderAttributes {
  number: string;
  status_text: string;
  shipping: number;
  tax: number;
  discount: number;
  ready_to_ship: number;
  is_wholesale: boolean;
  allow_partial: number;
  ordered_at: string | null;
  updated_at: string | null;
  fulfilled_at: string | null;
  cancelled_at: string | null;
  hold_until: string | null;
  ship_before: string | null;
  external_id: string | null;
  packing_note: string | null;
  shipping_method_name: string | null;
  shipping_method_code: string | null;
  tote: string;
  tags: string;
  created_at: string;
}

export interface Order {
  id: string;
  type: 'orders';
  attributes: OrderAttributes;
  relationships: Record<string, any>;
  links: Record<string, string>;
}

export interface OrderErrorValidation {
  orderNumber?: string[];
  products?: string;
  server?: ServerError[];
}

// Product Types
export interface ParamsProduct {
  filter: string;
}
export interface ProductErrorValidation {
  sku?: string[];
  name?: string[];
  server?: ServerError[];
}
export interface ProductAttributes {
  sku: string;
  name: string;
  type: string;
  price?: number | string;
  value?: string | null;
  customs_price: number | null;
  hs_code: string | null;
  country_of_origin: string | null;
  notes: string;
  width: number | null;
  height: number | null;
  length: number | null;
  weight: number | null;
  barcode: string;
  customs_description: string | null;
  tags: string;
  inventory_sync: number;
  quantity_on_hand: number;
  quantity_allocated: number;
  quantity_available: number;
  quantity_backordered: number;
  created_at: string;
}

export interface Product {
  id: string;
  type: 'products';
  attributes: ProductAttributes;
  relationships: Record<string, any>;
  links: Record<string, string>;
}
