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
    checkedItem: function(styles) {
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

Vue.component('customization', {
  template: `
  <fieldset>
    <legend>Customization</legend>
    <label for="customizable">Is this clothing customizable?</label>
    <div>
      <input type="radio" v-model="customizable" required name="customizable" @change="toggleCustomizable" id="customizableYes" :value="true" :checked="customizable" /> <label for="customizableYes">Yes</label>
    </div>
    <div>
      <input type="radio" v-model="customizable" required name="customizable" @change="toggleCustomizable" id="customizableNo" :value="false" :checked="customizable" /> <label for="customizableNo">No</label>
    </div>
    <div v-if="customizable">
      <div v-for="(item, index) in customizableItems">
        <label :for="'itemNumber'+index">Item ID</label>
        <input type="text" :name="'itemNumber'+index" :id="'itemNumber'+index" v-model="item.id" @blur="addedCustomizableItem()" placeholder="e.g. 001" />
      </div>
      <button type="button" @click="addCustomizableItem">Add another customizable item?</button>
    </div>
  </fieldset>
  `,
  data: function(){
    return {
      customizable: false,
      customizableItems: [{id:''}]
    }
  },
  methods: {
    addCustomizableItem: function(value) {
      this.customizableItems.push({id:''});
    },
    addedCustomizableItem: function(customizableItems) {
      this.$emit('change', this.customizableItems)
    },
    toggleCustomizable: function(){
      this.$emit('toggled', this.customizable);
    }
  }
});

Vue.component('style-ratings', {
  template: `
  <fieldset>
    <legend>Give ratings for selected styles</legend>
    <div v-if="styles.length < 5">
      <p>Select 5 styles above.</p>
    </div>
    <div v-if="styles.length === 5" v-for="style in styles">
      <label :for="'rating' + style">{{style}}</label>
      <input type="text" maxlength="3" :id="'rating' + style" :name="'rating' + style" v-model="styleRatings[style]" @blur="addedRating" v-validate="{ rules: { regex: /^[SSss]{2}|[ABCSabcs]{1,2}$/ }}" />
      <span v-show="errors.has('rating' + style)">{{ errors.first('rating' + style)}}</span>
    </div>
  </fieldset>
  `,
  props: ['styles'],
  data: function(){
    return {
      styleRatings: {}
    }
  },
  methods: {
    addedRating: function(){
      this.$emit('change', this.styleRatings);
    }
  }
});

Vue.component('tags', {
  template: `
  <fieldset class="style-form__checkbox-wrapper">
    <legend class="style-form__checkbox-title">Select tags</legend>
    <div v-for="tag in tags" class="style-form__checkbox-container">
      <input type="checkbox" v-bind:name="tag" @change="addedTag" v-model="selectedTags" :value="tag" v-bind:id="'selectTags' + tag" /> <label v-bind:for="'selectTags' + tag">{{tag}}</label>
    </div>
  </fieldset>
  `,
  props: ['tags'],
  data: function(){
    return {
      selectedTags: []
    }
  },
  methods: {
    addedTag: function(){
      this.$emit('change', this.selectedTags);
    }
  }
});

var app = new Vue({
  el: '#nikki',
  data: {
    nikkiData: nikkiData.state,
    clothingFormData: {
      id: '',
      name: '',
      hearts: 0,
      clothingStyles: [],
      ratings: {},
      tags: [],
      customizable: false,
      customizableItems: []
    }
  },
  computed: {
    orderedStyles: function() {
      return this.nikkiData.styles.sort()
    },
    orderedTags: function(){
      return this.nikkiData.tags.sort()
    },
    reformatObject: function(){
      var data = this.clothingFormData;
      var dataID = data.id;
      var dataObject = {};
      dataObject[dataID] = {
        name: data.name,
        hearts: data.hearts,
        style: data.ratings,
        tags: data.tags,
        customizable: data.customizable,
        otherStyles: data.customizableItems
      };
      return dataObject;
    },
    jsonData: function(){
      return JSON.stringify(this.reformatObject, null, 2)
    }
  },
  methods: {
    updateStyleArray: function(value) {
      this.clothingFormData.clothingStyles = value;
    },
    updateCustomItems: function(items) {
      this.clothingFormData.customizableItems = items;
    },
    updateRatings: function(ratings) {
      this.clothingFormData.ratings = ratings;
    },
    updateTags: function(tags) {
      this.clothingFormData.tags = tags;
    },
    updateCustomizable: function(customizable) {
      this.clothingFormData.customizable = customizable;
    }
  }
});

app.$validator.updateDictionary(customValidationMsgs);
