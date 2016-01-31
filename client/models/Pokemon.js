var Pokemon = Backbone.Model.extend ({
	initialize: function() {
    this.set('captured', 0);
	},
  caught: function() {
    this.set('captured', 1);
    this.trigger('caught', this);
  }
});