import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    return this._super(store, primaryModelClass, { movies: payload.results }, id, requestType);
  },
});
