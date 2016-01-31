var AppView = Backbone.View.extend({
  tagName: 'section',
  className: 'main',
	initialize: function() {
    this.pokemonTableView = new PokemonTableView({collection:this.model.get('pokemonList')});
    this.render();
	},
	render: function() {
		return this.$el.html(this.pokemonTableView.$el.on("click", function() {console.log("hello");}, this));
	}
});