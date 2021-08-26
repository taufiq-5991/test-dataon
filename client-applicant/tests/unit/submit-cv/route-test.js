import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | submit-cv', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:submit-cv');
    assert.ok(route);
  });
});
