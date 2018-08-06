import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

let store;

module('Unit | Serializer | application', function(hooks) {
  setupTest(hooks);

  hooks.beforeEach(function() {
    store = this.owner.lookup('service:store');
  });

  hooks.needs = [
    'model:genre',
  ];

  test('app serializer should exist', function(assert) {
    const serializer = store.serializerFor('application');

    assert.ok(serializer,
      'app serizalizer exists');
  });

  test('it serializes records', function(assert) {
    const record = store.createRecord('genre', {});
    const serializedRecord = record.serialize();

    assert.ok(serializedRecord,
      'record genre is serialized');
  });
});
