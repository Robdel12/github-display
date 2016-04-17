import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONSerializer.extend({
    normalizeSingleResponse: function(store, primaryModelClass, payload)
    {
      // payload.data.attributes.amount = payload.data.attributes.cost.amount;
      // payload.data.attributes.amount = payload.data.attributes.cost.currency;

      // delete payload.data.attributes.cost;

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

	payload.fullName = payload.full_name;
	payload.ownerName = payload.owner.login;

	return this._super(...arguments);
    },
});
