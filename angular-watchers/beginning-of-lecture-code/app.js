(function () {
'use strict';

angular.module('CounterApp', [])
.controller('CounterController', CounterController);

CounterController.$inject = ['$scope'];
function CounterController($scope) {

  $scope.showNumberOfWatchers = function () {

  	console.log($scope);
  };

}

})();
