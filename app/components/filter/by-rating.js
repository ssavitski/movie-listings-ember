import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: [
    'filter-by-rating',
    'md-whiteframe-z1',
  ],
  title: 'Filter by rating',

  actions: {
    // Set rating for movies filtering
    setRating(rating) {
      this.set('rating', rating);
    },
  },
});
