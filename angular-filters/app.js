(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController)
.filter('loves', LovesFilter)
.filter('truth', TruthFilter);

MsgController.$inject = ['$scope', 'lovesFilter'];
function MsgController($scope, lovesFilter) {

  $scope.sayMessage = function () {
    var msg = "divyanshu likes to eat healthy snacks at night!";
    return msg;
  };

  $scope.sayLovesMessage = function () {
    var msg = "divyanshu likes to eat healthy snacks at night!";
    msg = lovesFilter(msg)
    return msg;
  };

}

// referencing the FilterFactory functions that's responsible to create our filter functions. 
// LovesFilter factory is creating a filter fn for us ;) 
// Name of actual created fn is name of reg. filter + Filter !
function LovesFilter() {
  return function (input) {
    input = input || "";
    input = input.replace("likes", "loves");
    return input;
  };
}

function TruthFilter() {
  return function (input, target, replace) {
    input = input || "";
    input = input.replace(target, replace);
    return input;
  }
}

})();
