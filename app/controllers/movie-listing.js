import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { isEmpty } from '@ember/utils';

export default Controller.extend({
  genres: undefined,
  selectedRating: 3, // default value for rating

  filteredMovies: computed(
    'movies',
    'genres.@each.isSet',
    'selectedRating',

    function() {
      const selectedRating = this.get('selectedRating');
      const selectedGenresIDs = this.get('selectedGenresIDs');
      let movies = this.get('movies');

      // movies filtered by selected rating
      movies = movies.filter(movie =>
        movie.get('vote_average') >= selectedRating
      );
      // movies filtered by selected genres
      if (!isEmpty(selectedGenresIDs)) {
        movies = movies.filter(movie =>
          selectedGenresIDs.every(genreID =>
            movie.get('genre_ids').mapBy('id').includes(genreID)
          )
        );
      }

      return movies;
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
