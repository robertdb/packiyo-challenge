const data = [
  {
    type: 'orders',
    id: '53205',
    attributes: {
      number: '1',
      status_text: 'Pending',
      shipping: 0,
      tax: 0,
      discount: 0,
      ready_to_ship: 0,
      is_wholesale: false,
      allow_partial: 0,
      ordered_at: '2024-04-24T23:48:50.000000Z',
      updated_at: '2024-04-24T23:49:23.000000Z',
      fulfilled_at: null,
      cancelled_at: null,
      hold_until: null,
      ship_before: null,
      external_id: null,
      packing_note: null,
      shipping_method_name: null,
      shipping_method_code: null,
      tote: '',
      tags: '',
      created_at: '2024-04-24T23:48:50.000000Z',
    },
    relationships: {
      customer: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/customer',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/relationships/customer',
        },
        data: {
          type: 'customers',
          id: '17',
        },
      },
      shipping_contact_information: {
        links: {
          related:
            'https://staging1.internal1.packiyo.com/api/v1/orders/53205/shipping-contact-information',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/relationships/shipping-contact-information',
        },
        data: {
          type: 'contact-informations',
          id: '106689',
        },
      },
      billing_contact_information: {
        links: {
          related:
            'https://staging1.internal1.packiyo.com/api/v1/orders/53205/billing-contact-information',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/relationships/billing-contact-information',
        },
        data: {
          type: 'contact-informations',
          id: '106690',
        },
      },
      order_channel: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/order-channel',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/relationships/order-channel',
        },
        data: null,
      },
      order_items: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/order-items',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/relationships/order-items',
        },
        data: [
          {
            type: 'order-items',
            id: '53633',
          },
        ],
      },
      shipments: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/shipments',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205/relationships/shipments',
        },
        data: [],
      },
    },
    links: {
      self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53205',
    },
  },
  {
    type: 'orders',
    id: '53206',
    attributes: {
      number: 'order test',
      status_text: 'Pending',
      shipping: 0,
      tax: 0,
      discount: 0,
      ready_to_ship: 0,
      is_wholesale: false,
      allow_partial: 0,
      ordered_at: '2024-04-28T23:38:55.000000Z',
      updated_at: '2024-04-28T23:38:55.000000Z',
      fulfilled_at: null,
      cancelled_at: null,
      hold_until: null,
      ship_before: null,
      external_id: null,
      packing_note: null,
      shipping_method_name: null,
      shipping_method_code: null,
      tote: '',
      tags: '',
      created_at: '2024-04-28T23:38:55.000000Z',
    },
    relationships: {
      customer: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/customer',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/relationships/customer',
        },
        data: {
          type: 'customers',
          id: '17',
        },
      },
      shipping_contact_information: {
        links: {
          related:
            'https://staging1.internal1.packiyo.com/api/v1/orders/53206/shipping-contact-information',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/relationships/shipping-contact-information',
        },
        data: {
          type: 'contact-informations',
          id: '106691',
        },
      },
      billing_contact_information: {
        links: {
          related:
            'https://staging1.internal1.packiyo.com/api/v1/orders/53206/billing-contact-information',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/relationships/billing-contact-information',
        },
        data: {
          type: 'contact-informations',
          id: '106692',
        },
      },
      order_channel: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/order-channel',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/relationships/order-channel',
        },
        data: null,
      },
      order_items: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/order-items',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/relationships/order-items',
        },
        data: [
          {
            type: 'order-items',
            id: '53634',
          },
          {
            type: 'order-items',
            id: '53635',
          },
          {
            type: 'order-items',
            id: '53636',
          },
        ],
      },
      shipments: {
        links: {
          related: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/shipments',
          self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206/relationships/shipments',
        },
        data: [],
      },
    },
    links: {
      self: 'https://staging1.internal1.packiyo.com/api/v1/orders/53206',
    },
  },
];
