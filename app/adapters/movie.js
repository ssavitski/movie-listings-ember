import { isEmpty } from '@ember/utils';

import ApplicationAdapter from './application';
import config from 'movie-listing/config/environment';

const { API_KEY:api_key } = config;

export default ApplicationAdapter.extend({
  urlForFindAll() {
    const host = this.get('host');
    let namespace = this.get('namespace');

    namespace = isEmpty(namespace) ? '' : `/${namespace}`;

    return `${host}${namespace}/movie/now_playing?api_key=${api_key}`;
  },
});
