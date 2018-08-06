import { module, test } from 'qunit';
import { visit, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | movie listing', function(hooks) {
  setupApplicationTest(hooks);

  test('main components should exist on the page', async function(assert) {
    await visit('/movie-listing');

    assert.ok(!!find('.filter-by-genres'),
      'filter by genres exist on the page');
    assert.ok(!!find('.filter-by-rating'),
      'filter by rating exist on the page');
    assert.ok(!!find('.movie-listing'),
      'movie listing exist on the page');
  });
});
