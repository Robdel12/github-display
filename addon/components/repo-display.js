import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service('store'),

    repo: void 0,

    id: void 0,

    readmeOpen: true,

    descriptionDivStyle: Ember.computed('readmeOpen',
					function()
					{
					    if(this.get('readmeOpen')===true)
					    {
						return "display:inline-block; float:left; width:25%; border:1px solid black;";
					    }
					    else
					    {
						return "display:inline-block; float:left; width:95%;";
					    }
					}),

    willInsertElement: function() {
	var promise;
	promise = this.get('store').findRecord('repo', this.get('id'));
	return promise.then((function(_this) {
	    return function(result) {
		return _this.set('repo', result);
	    };
	})(this));
    },

    actions:
    {
	toggleReadmeOpen: function()
	{
	    this.toggleProperty('readmeOpen');
	}
    }
    
});
