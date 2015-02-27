beatsVine.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beats = BeatsFactory.beats;
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId);
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, yearsOfEmployment: $scope.reporterYOE, birthdate: $scope.reporterBirthdate });
    $scope.reporterName = null;
    $scope.reporterYOE = null;
    $scope.reporterBirthdate = null;
  };
});
