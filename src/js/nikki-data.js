Vue.use(VeeValidate);

var app = new Vue({
  el: '#nikki',
  data: {
    nikkiData: nikkiData.state,
    clothingFormData: {
      id: '',
      category: '',
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
    fullHearts: function() {
      return this.clothingFormData.hearts >= 6
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
    selectedHeartsClass: function(num) {
      return this.clothingFormData.hearts >=num ? 'form-group__heart--selected form-group__heart' : 'form-group__heart';
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
