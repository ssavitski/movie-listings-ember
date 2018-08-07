import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

let store;

module('Unit | Serializer | movie', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    store = this.owner.lookup('service:store');
  });

  test('it exists', function(assert) {
    const serializer = store.serializerFor('movie');

    assert.ok(serializer,
      'serializer for movies exist');
  });

  test('it serializes records', function(assert) {
    const record = store.createRecord('movie', {});
    const serializedRecord = record.serialize();

    assert.ok(serializedRecord,
      'serializer for movies serializes records');
  });
});
