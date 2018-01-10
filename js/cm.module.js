    var CM = angular.module('CM', ['ngRoute']);
    CM.controller("CmCtrl", function ($scope, $http) {
        $scope.navBarElem = [];
        $scope.personalProjects = [];

        $http.get("js/navbarElements.json")
            .then(function (response) {
                 $scope.navBarElem =  response.data;
        });

        $http.get("js/projects.json")
            .then(function (response) {
                 $scope.personalProjects =  response.data;
        });
    });
