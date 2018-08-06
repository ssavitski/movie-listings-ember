import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // Fetch genres array from Ember store
    return this.get('store').findAll('genre');
  },
});
