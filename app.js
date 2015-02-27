var beatsVine = angular.module('beatsVine', ['ui.router']);

beatsVine.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('BeatsTreats', {
    url: "/BeatsTreats",
    templateUrl: "partials/BeatsTreats.html",
    controller: 'BeatsTreatsCtrl'
  });

  $stateProvider.state('Style', {
    url: "/Style",
    templateUrl: "partials/Style.html",
    controller: 'StyleCtrl'
  });

});
