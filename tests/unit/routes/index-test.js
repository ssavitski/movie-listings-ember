import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | index', function(hooks) {
  setupTest(hooks);

  test('app index route should exist', function(assert) {
    const route = this.owner.lookup('route:index');

    assert.ok(route,
      'app index route exists');
  });
});
