Vue.component('category', {
  template: `
  <div class="form-group">
    <label class="form-group__label" for="category">Category</label>
    <select id="category">
      <option v-for="category in categories">{{category.name}}</option>
    </select>
  </div>
  `,
  props: ['categories'],
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
