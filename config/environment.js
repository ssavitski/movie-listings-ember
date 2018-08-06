'use strict';

module.exports = function(environment) {
  const ENV = {
    modulePrefix: 'movie-listing',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    API_PROTOCOL: 'https', // Protocol used for API requests
    API_DOMAIN: 'themoviedb.org', // Domain used for API requests
    API_SUB_DOMAIN: 'api', // Subdomain for API requests
    API_NAMESPACE: '', // Namespace for API requests
    API_KEY: '69456dd76a0ec05a747b7cfb63c15add',
  };

  const separation = ENV.API_SUB_DOMAIN ? '.' : '';

  // Host name for API requests
  ENV.API_HOST = `${ENV.API_PROTOCOL}://${ENV.API_SUB_DOMAIN}${separation}${ENV.API_DOMAIN}`;

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
