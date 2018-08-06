import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | application', function(hooks) {
  setupTest(hooks);

  test('application route should exist', function(assert) {
    const route = this.owner.lookup('route:application');

    assert.ok(route,
      'application route exists');
  });
});
