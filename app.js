var beatsVine = angular.module('beatsVine', ['ui.router']);

beatsVine.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('Beats', {
    url: "/Beats",
    templateUrl: "partials/Beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('Reporters', {
    url: "/Reporters",
    templateUrl: "partials/Reporters.html",
    controller: 'ReportersCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "/:beatsId",
    templateUrl: "partials/beats.reporters.html"
    controller: 'ReportersCtrl'
  });

});
