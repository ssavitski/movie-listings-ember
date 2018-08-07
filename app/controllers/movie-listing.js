import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  genres: undefined,
  selectedRating: 3, // default value for rating

  filteredMovies: computed(
    'movies',
    'genres.@each.isSet',
    'selectedRating',

    function() {
      // sort movies by popularity DESC
      return this.get('movies').sortBy('popularity').reverseObjects();
    }
  ),

  selectedGenresIDs: computed('genres.@each.isSet', function() {
    // IDs of selected genres
    return this.get('genres').filterBy('isSet', true).mapBy('id');
  }),

  init() {
    this._super(...arguments);

    // Initialize genres list with default value
    this.set('genres', []);
  },
});
