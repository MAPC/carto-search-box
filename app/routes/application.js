import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    search: {
      refreshModel: true
    }
  },
  model(params) {
    console.log(params);
    var url ='http://mapc-maps.cartodb.com/api/v2/sql?q=select%20search_tables(%27'+ params.search +'%27)';
    return Ember.$.ajax({url}).then(function(response) {
      return response;
    });
  }
});
