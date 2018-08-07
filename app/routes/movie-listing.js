import Route from '@ember/routing/route';

export default Route.extend({
  setupController(ctrl, movies) {
    // Get genres from application model and sort them by name
    const genres = this.modelFor('application').sortBy('name');

    ctrl.setProperties({ genres, movies });
  },

  model() {
    return this.get('store').findAll('movie');
  },
});
