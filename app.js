var beatsVine = angular.module('beatsVine', ['ui.router']);

beatsVine.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });



});
