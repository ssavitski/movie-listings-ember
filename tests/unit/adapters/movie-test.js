import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { isEmpty } from '@ember/utils';

module('Unit | Adapter | movie', function(hooks) {
  setupTest(hooks);

  test('API request for movies should have custom URL', function(assert) {
    const adapter = this.owner.lookup('adapter:movie');
    const urlForFindAll = adapter.urlForFindAll();
    const host = adapter.get('host');
    let namespace = adapter.get('namespace');

    namespace = isEmpty(namespace) ? namespace : `/${namespace}`;

    assert.ok(urlForFindAll, `${host}${namespace}/movie/now_playing`,
      'API request for movies has custom URL');
  });
});
