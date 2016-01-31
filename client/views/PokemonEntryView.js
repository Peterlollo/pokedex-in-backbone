var PokemonEntryView = Backbone.View.extend({
  initialize: function() {
    this.render();
  },
	tagName: 'tr',
   events: {
    'click': 'onClickyClick'
  },
  onClickyClick: function() {
    console.log('clicked');
  },
  className: 'pokemon',
	template: _.template('<td><%= name %></td><td><%= type %></td><td><%= stage %></td><td><%= species %></td><td><button>ClickMe</button></td>'),
	render: function() {
		$('table').append(this.$el.html(this.template(this.model.attributes)));
	},
});