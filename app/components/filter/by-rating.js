import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: [
    'filter-by-rating',
    'md-whiteframe-z1',
  ],

  actions: {
    // Set rating for movies filtering
    setRating(rating) {
      this.set('rating', rating);
    },
  },
});
