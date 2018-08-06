import { module, test } from 'qunit';
import { visit, find, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | application', function(hooks) {
  setupApplicationTest(hooks);

  test('app footer and header should exists on the page', async function(assert) {
    await visit('/');

    assert.ok(!!find('.app-header'),
      'App header exists');
    assert.ok(!!find('.app-footer'),
      'App footer exists');
  });

  test('should show movie listing as the home page', async function(assert) {
    await visit('/');

    assert.equal(currentURL(), '/movie-listing',
      'should redirect automatically');
  });
});
