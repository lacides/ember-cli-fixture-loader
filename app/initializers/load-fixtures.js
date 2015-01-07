import config from '../config/environment';

export default {
  name: 'load-fixtures',

  initialize: function (container, app) {
    if (!config.FIXTURES) {
      config.FIXTURES = {};
    }

    if (!config.FIXTURES.enabled) {
      return;
    }

    Object.keys(require._eak_seen).forEach(function (service) {
      var podFixtureRegexp,
        modelPath,
        modelInstance,
        fixturePath,
        fixtures,
        isPodFixture;

      podFixtureRegexp = new RegExp(app.podModulePrefix + '/(.*?)/fixture');

      isPodFixture = podFixtureRegexp.test(service);

      if (!~service.indexOf(app.modulePrefix + '/models/') && !isPodFixture) {
        return;
      }

      modelPath = isPodFixture ? service.replace('/fixture', '/model') : service;
      fixturePath = isPodFixture ? service : service.replace('/models/', '/fixtures/');

      modelInstance = require(modelPath)['default'];

      try {
        fixtures = require(fixturePath)['default'];
      } catch (error) {
        fixtures = [];
      }

      if (fixtures.length) {
        fixtures = Ember.copy(fixtures, true);

        modelInstance.reopenClass({
          FIXTURES: fixtures
        });
      }
    });
  }
};