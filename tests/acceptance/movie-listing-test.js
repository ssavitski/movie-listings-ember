import { module, test } from 'qunit';
import { visit, find, click, findAll } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { isEmpty } from '@ember/utils';

module('Acceptance | movie listing', function(hooks) {
  setupApplicationTest(hooks);

  test('main components should exist on the page', async function(assert) {
    await visit('/movie-listing');

    assert.ok(!!find('.filter-by-genres'),
      'filter by genres exist on the page');
    assert.ok(!!find('.filter-by-rating'),
      'filter by rating exist on the page');
    assert.ok(!!find('.items-list'),
      'movie listing exist on the page');
  });

  test('movies list should be filtered by genres', async function(assert) {
    await visit('/movie-listing');

    const genreSelector = '.filter-by-genres__item';
    const genresListSelector = '.items-list__genres';
    const movieSelector = '.items-list__item';
    const genre_1 = find(`${genreSelector}:first-child`).textContent.trim();
    const genre_2 = find(`${genreSelector}:nth-child(2)`).textContent.trim();
    let withGenre_1 = true, withGenre_2 = true;

    await click(`${genreSelector}:first-child md-checkbox`);

    if (!isEmpty(findAll(movieSelector))) {
      withGenre_1 = findAll(movieSelector).every(movieElement =>
        movieElement.querySelector('.items-list__genres').textContent.indexOf(genre_1) !== -1
      );
    }

    assert.ok(withGenre_1,
      `All movies in the list have ${genre_1} genre or there is no movies in the list`);

    await click(`${genreSelector}:nth-child(2) md-checkbox`);

    withGenre_1 = true;

    if (!isEmpty(findAll(movieSelector))) {
      withGenre_1 = findAll(movieSelector).every(movieElement =>
        movieElement.querySelector(genresListSelector).textContent.indexOf(genre_1) !== -1
      );

      withGenre_2 = findAll(movieSelector).every(movieElement =>
        movieElement.querySelector(genresListSelector).textContent.indexOf(genre_2) !== -1
      );
    }

    assert.ok(withGenre_1 && withGenre_2,
      `All movies in the list have ${genre_1} & ${genre_2} genres or there is no movies in the list`);
  });

  test('movies should be sorted descendingly by popularity', async function(assert) {
    await visit('/movie-listing');

    const movieSelector = '.items-list__item';
    let popularities = [];
    let isSortedDesc = false;

    if (!isEmpty(findAll(movieSelector))) {
      popularities = findAll(movieSelector).map(movieElement =>
        parseFloat(movieElement.dataset.popularity)
      );
    }
    // Check if array of popularities values is sorted descendingly
    isSortedDesc = !!popularities.reduce((memo, item) =>
      memo && item <= memo && item
    );

    assert.ok(isEmpty(popularities) || isSortedDesc,
      'movies is sorted descendingly by popularity or no movies in the list');
  });
});
