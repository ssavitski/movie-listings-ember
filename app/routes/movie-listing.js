import Route from '@ember/routing/route';

export default Route.extend({
  setupController(ctrl, movies) {
    // Get genres from application model and sort them by name
    let { genres, imageSettings } = this.modelFor('application');
    genres = genres.sortBy('name');

    // sort movies by popularity DESC
    movies = movies.sortBy('popularity').reverseObjects();

    // generate url prefix for poster image
    const { base_url, poster_sizes } = imageSettings.images;
    const posterImgURL = `${base_url}${poster_sizes[4]}`;

    // set whole poster url for each movie
    movies.forEach(movie => {
      const whole_poster_path = `${posterImgURL}${movie.get('poster_path')}`;

      movie.set('whole_poster_path', whole_poster_path);
    });

    ctrl.setProperties({ genres, movies });
  },

  model() {
    return this.get('store').findAll('movie');
  },
});
