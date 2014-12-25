export default {
  name: 'load-fixtures',

  initialize: function() {
    Object.keys(require._eak_seen).forEach(function(module) {
      if (!module.match(/^\w[\w\d\-]+\/models/)) {
        return;
      }
      var model = require(module)['default'];
      var fixtureModule = module.replace('/models/', '/fixtures/');
      var fixtures;
      try {
        fixtures = require(fixtureModule)['default'];
      } catch (error) {
        fixtures = [];
      }

      fixtures = Ember.copy(fixtures, true);
      model.reopenClass({
        FIXTURES: fixtures
      });
    });
  }
};
