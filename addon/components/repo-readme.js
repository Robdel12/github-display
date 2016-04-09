import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),
    
    readme: void 0,
    
    repoId: void 0,

    willInsertElement: function() {
	var promise;
	promise = this.get('store').findRecord('repoReadme', this.get('repoId'));
	return promise.then((function(_this) {
	    return function(result) {
		return _this.set('readme', result);
	    };
	})(this));
    }
});
