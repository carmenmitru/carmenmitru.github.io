var CM = angular.module('CM',['ngRoute']);
CM.controller("CmCtrl",function($scope){

    $scope.navBarElem = [
        {
            "name":"About",
            "path":"/about"
        },
        {
            "name":"Courses",
            "path":"/courses"
        },
        // {
        //     "name":"Portofolio",
        //     "path":"/portofolio"
        // },
        {
            "name":"Blog",
            "path":"/blog"
        }
    ]
});