import DS from 'ember-data';

import config from 'movie-listing/config/environment';

const {
  API_HOST:host,
  API_NAMESPACE:namespace,
} = config;

export default DS.JSONAPIAdapter.extend({
  host,
  namespace,
});
