var AppModel = Backbone.Model.extend({
	initialize: function(params) {
		this.set('pokemonList', params.list);
		params.list.on('caught', function(){ console.log('app model click');});
	},
});