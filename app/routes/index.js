import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    // should show movie listing as the home page
    this.replaceWith('movie-listing');
  },
});
