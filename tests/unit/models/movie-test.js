import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { get } from '@ember/object';

module('Unit | Model | movie', function(hooks) {
  let store;

  setupTest(hooks);

  hooks.beforeEach(function() {
    store = this.owner.lookup('service:store');
  });

  hooks.needs = [
    'model:genre',
  ];

  test('movie model should exist', function(assert) {
    const model = store.createRecord('movie', {});

    assert.ok(model,
      'Movie model exists');
  });

  test('Movie model should own a genre', function(assert) {
    const Movie = store.modelFor('movie');

    // lookup the relationship on the movie model
    const relationship = get(Movie, 'relationshipsByName').get('genre_ids');

    assert.equal(relationship.type, 'genre',
      'Movie model has relationship with genre');
    assert.equal(relationship.kind, 'hasMany',
      'kind of relationship with genre is hasMany');
  });
});
