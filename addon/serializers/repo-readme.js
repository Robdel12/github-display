import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend({
    normalizeSingleResponse: function(store, primaryModelClass, payload)
    {
      Ember.Logger.log(payload);

      return this._super(...arguments);
    },

    normalize: function (modelClass, resourceHash, prop)
    {
	Ember.Logger.log("in normalize, modelClass = " + modelClass);
	Ember.Logger.log("in normalize, resourceHash = " + resourceHash);
	Ember.Logger.log("in normalize, prop = " + prop);

	return this._super(...arguments);
    },

    normalizeResponse: function(store, primaryModelClass, payload, id, requestType)
    {
	Ember.Logger.log("in normalizeResponse, store = " + store);
	Ember.Logger.log("in normalizeResponse, primaryModelClass = " + primaryModelClass);
	Ember.Logger.log("in normalizeResponse, payload = " + payload);
	Ember.Logger.log("in normalizeResponse, id = " + id);
	Ember.Logger.log("in normalizeResponse, requestType = " + requestType);
	Ember.Logger.log(payload);

	payload.id = id;
	payload.sha = payload.sha;
	payload.htmlURL = payload.html_url;
	payload.URL = payload.download_url;

	return this._super(...arguments);
    },
});
