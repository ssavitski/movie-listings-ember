import Controller from '@ember/controller';

export default Controller.extend({
  genres: undefined,

  init() {
    this._super(...arguments);

    // Initialize genres list with empty array
    this.set('genres', []);
  },
});
