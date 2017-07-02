var nikkiData = new Vuex.Store({
  state: {
    styles: ['Gorgeous', 'Simple', 'Elegance', 'Lively', 'Mature', 'Cute', 'Sexy', 'Pure', 'Warm', 'Cool'],
    tags: ['Sun Care', 'Dancer', 'Floral', 'Winter', 'Britain', 'Swimsuit', 'Shower', 'Kimono', 'Pajamas', 'Wedding', 'Army', 'Office', 'Apron', 'Cheongsam', 'Maiden', 'Evening Gown', 'Navy', 'Traditional', 'Bunny', 'Lady', 'Lolita', 'Gothic', 'Sports', 'Harajuku', 'Preppy', 'Unisex', 'Future', 'Fairy', 'Rock', 'Denim', 'Pet', 'Goddess', 'POP', 'Homewear', 'Chinese Classical', 'Hindu', 'Republic of China', 'European', 'Swordsman', 'Rain', 'Modern China', 'Dryad', 'Bohemia', 'Paramedics'],
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

Vue.use(VeeValidate);

var customValidationMsgs = {
  en: {
    custom: {
      ratingMature: {
        regex: 'Please give a letter grade - SS, S, A, B, or C'
      }
    }
  }
};

Vue.component('style-checkboxes', {
  template: `
  <fieldset class="style-form__checkbox-wrapper">
    <legend class="style-form__checkbox-title">Select styles</legend>
    <div v-for="style in styles" class="style-form__checkbox-container">
      <input :disabled="shouldBeDisabled(style)" @change="checkedItem(selectedStyles)" v-model="selectedStyles" type="checkbox" :value="style" :name="style" :id="'selectStyles' + style" />
      <label v-bind:for="'selectStyles' + style" v-bind:class="'style style--' + style.toLowerCase()">{{style}}</label>
    </div>
  </fieldset>
  `,
  props: ['styles'],
  data: function() {
    return {
      selectedStyles: []
    }
  },
  methods: {
    checkedItem: function(styles, action) {
      this.$emit('change', styles);
    },
    shouldBeDisabled: function(value) {
      if(this.selectedStyles.indexOf(value) > -1){
        return false;
      }
      return this.selectedStyles.length >= 5;
    }
  }
});

var app = new Vue({
  el: '#nikki',
  data: {
    nikkiData: nikkiData.state,
    clothingFormData: {
      clothingStyles: []
    }
  },
  computed: {
    orderedStyles: function() {
      return this.nikkiData.styles.sort()
    },
    orderedTags: function(){
      return this.nikkiData.tags.sort()
    }
  },
  methods: {
    updateStyleArray: function(value) {
      this.clothingFormData.clothingStyles = value;
    }
  }
});

app.$validator.updateDictionary(customValidationMsgs);
