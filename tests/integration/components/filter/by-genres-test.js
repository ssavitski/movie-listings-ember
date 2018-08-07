import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import genres from 'movie-listing/tests/mock-data/genres';

module('Integration | Component | filter/by-genres', function(hooks) {
  setupRenderingTest(hooks);

  test('number of list items should be equal to number of genres', async function(assert) {
    this.set('genres', genres);

    await render(hbs`{{filter/by-genres genres=genres}}`);

    assert.equal(this.element.getElementsByTagName('li').length, genres.length,
      'number of list items is equal to number of genres');
  });

  test('genres section should be toggle by clicking on the header', async function(assert) {
    this.set('genres', genres);

    const collapsedClass = 'filter-by-genres__header--is-collapsed';
    const headerSelector = '.filter-by-genres__header';

    await render(hbs`{{filter/by-genres genres=genres}}`);

    await click('.filter-by-genres__header');

    assert.ok(this.$(headerSelector).hasClass(collapsedClass),
      'genres section is collapsed');

    await click('.filter-by-genres__header');

    assert.notOk(this.$(headerSelector).hasClass(collapsedClass),
      'genres section is expanded');
  });
});
