import DS from 'ember-data';

export default DS.Model.extend({

  // Attributes
  title: DS.attr(),
  poster_path: DS.attr(),
  vote_average: DS.attr(),
  popularity: DS.attr(),

  // Relations
  genre_ids: DS.hasMany('genre'),

});
