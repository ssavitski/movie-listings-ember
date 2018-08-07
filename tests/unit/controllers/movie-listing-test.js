import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';

import genres from 'movie-listing/tests/mock-data/genres';

let ctrl;

module('Unit | Controller | movie-listing', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    ctrl = this.owner.lookup('controller:movie-listing');
  });

  test('properties should be initialized with default values', function(assert) {
    assert.deepEqual(ctrl.get('genres'), [],
      'Genres list is initialized with default value');
    assert.equal(ctrl.get('selectedRating'), 3,
      'Rating is initialized with default value');
  });

  test('computed properties should be calculated properly', function(assert) {
    const selectedGenresIDs = [];

    ctrl.set('genres', genres.map(genre => EmberObject.create(genre)));

    const genre_1 = ctrl.get('genres').objectAt(0);
    const genre_2 = ctrl.get('genres').objectAt(2);

    genre_1.set('isSet', true);
    selectedGenresIDs.pushObject(genre_1.get('id'));

    genre_2.set('isSet', true);
    selectedGenresIDs.pushObject(genre_2.get('id'));

    assert.deepEqual(ctrl.get('selectedGenresIDs'), selectedGenresIDs,
      'selectedGenresIDs is set properly');
  });
});
