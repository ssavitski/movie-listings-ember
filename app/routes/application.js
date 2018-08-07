import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

import config from 'movie-listing/config/environment';

const {
  API_HOST:host,
  API_NAMESPACE,
  API_KEY:api_key,
} = config;
const namespace = API_NAMESPACE ? `/${API_NAMESPACE}` : '';

export default Route.extend({
  ajax: service(),

  model() {
    const data = { api_key };
    const url = `${host}${namespace}/configuration`;

    return RSVP.hash({
      // Fetch genres array from Ember store
      genres: this.get('store').findAll('genre'),
      // Fetch image settings directly from server
      imageSettings: this.get('ajax').request(url, { data }),
    });
  },
});
