import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { isEmpty } from '@ember/utils';

module('Unit | Adapter | genre', function(hooks) {
  setupTest(hooks);

  test('API request for genres should have custom URL', function(assert) {
    const adapter = this.owner.lookup('adapter:genre');
    const urlForFindAll = adapter.urlForFindAll();
    const host = adapter.get('host');
    let namespace = adapter.get('namespace');

    namespace = isEmpty(namespace) ? namespace : `/${namespace}`;

    assert.ok(urlForFindAll, `${host}${namespace}/genre/movie/list`,
      'API request for genres has custom URL');
  });
});
