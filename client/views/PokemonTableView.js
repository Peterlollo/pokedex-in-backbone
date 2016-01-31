var PokemonTableView = Backbone.View.extend({
	tagName: 'table',
  className: 'table table-striped',
  initialize: function (){
    this.render();
  },
  events: {
    'click': 'onClickyClick'
  },
  onClickyClick: function() {
    console.log('clicked');
  },
	render: function() {
		// this.$el.children().detach();
		// this.$el.html('<tr><th>Name</th><th>Type</th><th>Stage</th><th>Species</th></tr>').append(
		// 	this.collection.map(function(Pokemon){
		// 		return new PokemonEntryView({model: Pokemon}).render();
		//   })
  //   );
    $('section').append(this.$el);
    setTimeout(function() {
      this.$el.html('<tr><th>Name</th><th>Type</th><th>Stage</th><th>Species</th></tr>').bind(this);
      this.collection.each(function(Pokemon){
        return new PokemonEntryView({model: Pokemon}).render().bind(this);
      });
    }.bind(this), 2000);
    
	}
});