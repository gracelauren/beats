beatsVine.controller('BeatsCtrl', function BeatsCtrl($scope, $state, BeatsFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.BeatsFactory = BeatsFactory;
});
