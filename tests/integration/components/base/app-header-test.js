import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | base/app-header', function(hooks) {
  setupRenderingTest(hooks);

  test('should have proper tag name', async function(assert) {
    await render(hbs`{{base/app-header}}`);

    assert.equal(this.element.firstChild.tagName, 'HEADER',
      'Component "app-header" has proper tag name');
  });
});
