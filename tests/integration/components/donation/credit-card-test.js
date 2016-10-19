import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('donation/credit-card', 'Integration | Component | donation/credit card', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{donation/credit-card}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#donation/credit-card}}
      template block text
    {{/donation/credit-card}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
