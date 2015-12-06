'use strict';

angular.module('example',['yql']);

angular.module('example').config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('yqlService');
}]);

angular.module('example').controller('mainController', function($scope, $http){

    $scope.sendPost = function(){

        $scope.processText = "Sending....";

        $http.post('http://requestb.in/u5y4zgu5', {'text':$scope.text})
            .then(function (response) {

                $scope.processText = "Sent :)";

            }, function(){

                $scope.processText = "Somewthing went wrong!";

            });

    };

});