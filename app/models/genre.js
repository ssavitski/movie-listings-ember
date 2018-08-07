import DS from 'ember-data';

export default DS.Model.extend({

  // Attributes
  name: DS.attr(),

  // Custom attributes
  isSet: DS.attr('boolean', { defaultValue: false }),

});
