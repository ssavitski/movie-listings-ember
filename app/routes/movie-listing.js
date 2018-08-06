import Route from '@ember/routing/route';

export default Route.extend({
  setupController(ctrl) {
    // Get genres from application model and sort them by name
    const genres = this.modelFor('application').sortBy('name');

    ctrl.set('genres', genres);
  },
});
