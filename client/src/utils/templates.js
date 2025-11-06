export function getTemplate(category) {
  switch (category) {
    case 'clothing':
      return [
        { name: 'Product', fields: [
          { name: 'id', type: 'uuid' }, { name: 'name', type: 'string' },
          { name: 'price', type: 'integer' }, { name: 'size', type: 'string' },
          { name: 'color', type: 'string' }, { name: 'stock', type: 'integer' },
          { name: 'imageUrl', type: 'string' }
        ]},
        { name: 'Category', fields: [
          { name: 'id', type: 'uuid' }, { name: 'title', type: 'string' },
          { name: 'description', type: 'string' }
        ]},
      ]

    case 'food':
      return [
        { name: 'Restaurant', fields: [
          { name: 'id', type: 'uuid' }, { name: 'name', type: 'string' },
          { name: 'location', type: 'string' }, { name: 'rating', type: 'integer' }
        ]},
        { name: 'Dish', fields: [
          { name: 'id', type: 'uuid' }, { name: 'name', type: 'string' },
          { name: 'price', type: 'integer' }, { name: 'isVeg', type: 'boolean' }
        ]}
      ]

    case 'banking':
      return [
        { name: 'Account', fields: [
          { name: 'id', type: 'uuid' }, { name: 'holderName', type: 'name' },
          { name: 'balance', type: 'integer' }, { name: 'type', type: 'string' }
        ]},
        { name: 'Transaction', fields: [
          { name: 'id', type: 'uuid' }, { name: 'amount', type: 'integer' },
          { name: 'date', type: 'date' }, { name: 'status', type: 'string' }
        ]}
      ]

    case 'health':
      return [
        { name: 'Patient', fields: [
          { name: 'id', type: 'uuid' }, { name: 'name', type: 'name' },
          { name: 'email', type: 'email' }, { name: 'age', type: 'integer' },
          { name: 'disease', type: 'string' }
        ]},
        { name: 'Doctor', fields: [
          { name: 'id', type: 'uuid' }, { name: 'name', type: 'name' },
          { name: 'specialization', type: 'string' }
        ]}
      ]

    case 'travel':
      return [
        { name: 'Flight', fields: [
          { name: 'id', type: 'uuid' }, { name: 'airline', type: 'string' },
          { name: 'departure', type: 'string' }, { name: 'arrival', type: 'string' }
        ]},
        { name: 'Booking', fields: [
          { name: 'id', type: 'uuid' }, { name: 'customerName', type: 'name' },
          { name: 'date', type: 'date' }
        ]}
      ]

    case 'movies':
      return [
        { name: 'Movie', fields: [
          { name: 'id', type: 'uuid' }, { name: 'title', type: 'string' },
          { name: 'genre', type: 'string' }, { name: 'rating', type: 'integer' }
        ]},
        { name: 'Actor', fields: [
          { name: 'id', type: 'uuid' }, { name: 'name', type: 'name' },
          { name: 'age', type: 'integer' }
        ]}
      ]

    default:
      return [
        { name: 'User', fields: [
          { name: 'id', type: 'uuid' }, { name: 'email', type: 'email' }
        ]}
      ]
  }
}
