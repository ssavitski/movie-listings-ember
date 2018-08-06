import Controller from '@ember/controller';

export default Controller.extend({
  genres: undefined,
  vote_average: 3, // default vvalue for rating

  init() {
    this._super(...arguments);

    // Initialize genres list with empty array
    this.set('genres', []);
  },
});
