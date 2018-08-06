import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

let store, model;

module('Unit | Model | genre', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    store = this.owner.lookup('service:store');
    model = store.createRecord('genre', {});
  });

  test('genre model should exist', function(assert) {
    assert.ok(model,
      'Genre model exists');
  });

  test('should be initialized with default values', function(assert) {
    assert.equal(model.get('isSet'), false,
      'isSet prop is initialized with default value');
  });
});
