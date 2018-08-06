import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Model | genre', function(hooks) {
  setupTest(hooks);

  test('genre model should exist', function(assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('genre', {});

    assert.ok(model,
      'Genre model exists');
  });
});
