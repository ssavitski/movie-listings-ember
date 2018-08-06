import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

import config from 'movie-listing/config/environment';

const {
  API_HOST:host,
  API_NAMESPACE:namespace,
} = config;

module('Unit | Adapter | application', function(hooks) {
  setupTest(hooks);

  test('API settings should be used from config', function(assert) {
    const adapter = this.owner.lookup('adapter:application');

    assert.equal(adapter.get('host'), host,
      'Host name is used from config');
    assert.equal(adapter.get('namespace'), namespace,
      'Namespace is used from config');
  });
});
