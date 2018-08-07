import PaperItem from 'ember-paper/components/paper-item';

// Add custom attributes support for Ember paper component "paper-item"
export default PaperItem.extend({
  attributeBindings: [
    'data-popularity',
    'data-rating',
  ],
});
