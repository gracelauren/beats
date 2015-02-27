beatsVine.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, $state, BeatsFactory, UtilitiesFactory) {
  $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId)
  $scope.addReporter = function() {
    $scope.course.reporters.push({ name: $scope.reporterName });
    $scope.reporterName = null;
  }
});
