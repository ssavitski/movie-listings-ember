import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | movie-listing', function(hooks) {
  setupTest(hooks);

  test('movie-listing route should exist', function(assert) {
    const route = this.owner.lookup('route:movie-listing');

    assert.ok(route,
      'movie-listing route exists');
  });
});
