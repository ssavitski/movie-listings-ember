import DS from 'ember-data';

export default DS.Model.extend({

  // Attributes
  title: DS.attr(),
  poster_path: DS.attr(),

  // Relations
  genre_ids: DS.hasMany('genre'),

});
