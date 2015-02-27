beatsVine.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, $state, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.courses, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, yearsOfEmployment: $scope.reporterYOE, birthdate: $scope.reporterBirthdate });
    $scope.reporterName = null;
  }
});
