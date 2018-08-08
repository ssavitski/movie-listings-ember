import Component from '@ember/component';

export default Component.extend({
  tagName: 'section',
  classNames: [
    'filter-by-genres',
  ],

  title: 'Filter by genre',
  isCollapsed: false, // responsible for slide toggle genre section

  actions: {
    toggleGenreSection() {
      this.toggleProperty('isCollapsed');
    },
  },
});
