import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import EmberObject from '@ember/object';

import movies from 'movie-listing/tests/mock-data/movies';
import genres from 'movie-listing/tests/mock-data/genres';

module('Integration | Component | listing/items-list', function(hooks) {
  setupRenderingTest(hooks);

  test('number of list items should be equal to count of items passed', async function(assert) {
    this.set('items', movies.map(movie => EmberObject.create(movie)));

    await render(hbs`{{listing/items-list items=items}}`);

    assert.equal(this.element.getElementsByTagName('md-list-item').length, movies.length,
      'number of list items is equal to count of items passed');
  });

  test('genres of item should be rendered', async function(assert) {
    const movie = EmberObject.create(movies[0]);
    const genreNameSelector = '.items-list__item:first-child .items-list__genre-name';

    movie.set('genre_ids', genres.map(genre => EmberObject.create(genre)));

    this.set('items', [ movie ]);

    await render(hbs`{{listing/items-list items=items}}`);

    assert.equal(this.element.querySelectorAll(genreNameSelector).length, genres.length,
      'proper number of genres of item is rendered');
  });
});
