var nikkiData = new Vuex.Store({
  state: {
    styles: ['Gorgeous', 'Simple', 'Elegance', 'Lively', 'Mature', 'Cute', 'Sexy', 'Pure', 'Warm', 'Cool'],
    tags: ['Sun Care', 'Dancer', 'Floral', 'Winter', 'Britain', 'Swimsuit', 'Shower', 'Kimono', 'Pajamas', 'Wedding', 'Army', 'Office', 'Apron', 'Cheongsam', 'Maiden', 'Evening Gown', 'Navy', 'Traditional', 'Bunny', 'Lady', 'Lolita', 'Gothic', 'Sports', 'Harajuku', 'Preppy', 'Unisex', 'Future', 'Fairy', 'Rock', 'Denim', 'Pet', 'Goddess', 'POP', 'Homewear', 'Chinese Classical', 'Hindu', 'Republic of China', 'European', 'Swordsman', 'Rain', 'Modern China', 'Dryad', 'Bohemia', 'Paramedics'],
    categories: [
      {
        name: 'Hair',
        type: 'category'
      },
      {
        name: 'Dress',
        type: 'category'
      },
      {
        name: 'Coat',
        type: 'category'
      },
      {
        name: 'Tops',
        type: 'category'
      },
      {
        name: 'Bottoms',
        type: 'category'
      },
      {
        name: 'Hosiery',
        type: 'category'
      },
      {
        name: 'Shoes',
        type: 'category'
      },
      {
        name: 'Accessory',
        type: 'container',
        children: [
          {
            name: 'Headwear',
            type: 'container',
            children: [
              {
                name: 'Hair ornaments',
                type: 'category'
              },
              {
                name: 'Veil',
                type: 'category'
              },
              {
                name: 'Hairpin',
                type: 'category'
              },
              {
                name: 'Ear',
                type: 'category'
              }
            ]
          },
          {
            name: 'Earrings',
            type: 'category'
          },
          {
            name: 'Necklace',
            type: 'container',
            children: [
              {
                name: 'Scarf',
                type: 'category'
              },
              {
                name: 'Necklace',
                type: 'category'
              }
            ]
          },
          {
            name: 'Bracelet',
            type: 'container',
            children: [
              {
                name: 'Right hand ornaments',
                type: 'category'
              },
              {
                name: 'Left hand ornaments',
                type: 'category'
              },
              {
                name: 'Glove',
                type: 'category'
              }
            ]
          },
          {
            name: 'Handheld',
            type: 'container',
            children: [
              {
                name: 'Right hand holding',
                type: 'category'
              },
              {
                name: 'Left hand holding',
                type: 'category'
              },
              {
                name: 'Both hand holding',
                type: 'category'
              }
            ]
          },
          {
            name: 'Waist',
            type: 'category'
          },
          {
            name: 'Special',
            type: 'container',
            children: [
              {
                name: 'Face',
                type: 'category'
              },
              {
                name: 'Brooch',
                type: 'category'
              },
              {
                name: 'Tattoo',
                type: 'category'
              },
              {
                name: 'Wing',
                type: 'category'
              },
              {
                name: 'Tail',
                type: 'category'
              },
              {
                name: 'Foreground',
                type: 'category'
              },
              {
                name: 'Background',
                type: 'category'
              },
              {
                name: 'Head ornaments',
                type: 'category'
              },
              {
                name: 'Ground',
                type: 'category'
              },
              {
                name: 'Skin',
                type: 'category'
              }
            ]
          }
        ]
      }
    ],
    clothing: {
      '001': {
        name: 'Nikki\'s Pinky',
        hearts: 2,
        style: {
          simple: 's',
          pure: 'a',
          lively: 'a',
          warm: 'a',
          cute: 'a'
        },
        id: '001',
        tags: [],
        customizable: false,
        otherStyles: false
      },
      '004': {
        name: 'Sporty Teenager',
        hearts: 3,
        style: {
          simple: 's',
          pure: 's',
          lively: 'a',
          cool: 'a',
          cute: 'a'
        },
        id: '004',
        tags: ['Unisex'],
        customizable: true,
        otherStyles: []
      },
      '007': {
        name: 'Elegant Nobleman',
        hearts: 2,
        style: {
          simple: 'b',
          pure: 'b',
          lively: 'a',
          cool: 's',
          cute: 's'
        },
        id: '007',
        tags: ['Unisex'],
        customizable: true,
        otherStyles: []
      },
      '010': {
        name: 'Perfect Senior',
        hearts: 2,
        style: {
          simple: 's',
          pure: 'a',
          lively: 'b',
          cool: 'a',
          cute: 'a'
        },
        id: '010',
        tags: ['Unisex'],
        customizable: true,
        otherStyles: []
      }
    }
  },
  mutations: {
    add: function(state, newItems){
      Object.assign(state, newItems)
    }
  }
});
