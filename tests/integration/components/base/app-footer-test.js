import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | base/app-footer', function(hooks) {
  setupRenderingTest(hooks);

  test('should have proper tag name', async function(assert) {
    await render(hbs`{{base/app-footer}}`);

    assert.equal(this.element.firstChild.tagName, 'FOOTER',
      'Component "app-footer" has proper tag name');
  });
});
