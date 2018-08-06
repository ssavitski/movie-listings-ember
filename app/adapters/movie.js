import { isEmpty } from '@ember/utils';

import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  urlForFindAll() {
    const host = this.get('host');
    let namespace = this.get('namespace');

    namespace = isEmpty(namespace) ? '' : `/${namespace}`;

    return `${host}${namespace}/movie/now_playing`;
  },
});
