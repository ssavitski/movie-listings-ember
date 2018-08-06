import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | movie-listing', function(hooks) {
  setupTest(hooks);

  test('properties should be initialized with default values', function(assert) {
    const ctrl = this.owner.lookup('controller:movie-listing');

    assert.deepEqual(ctrl.get('genres'), [],
      'Genres list is initialized with default value');
  });
});
