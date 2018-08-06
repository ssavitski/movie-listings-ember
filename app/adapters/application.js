import DS from 'ember-data';
import { computed } from '@ember/object';

import config from 'movie-listing/config/environment';

const {
  API_HOST:host,
  API_NAMESPACE:namespace,
  API_KEY:api_key,
} = config;

export default DS.JSONAPIAdapter.extend({
  host,
  namespace,

  headers: computed(function() {
    return { api_key };
  }),
});
