CM.config(function($routeProvider,$locationProvider){
    $routeProvider
        .when("/", {
            templateUrl : "index.html",
            controller: "CmCtrl"
        })
        .when("/404", {
            templateUrl : "404.html"
        })
        .when("/about", {
            templateUrl : "about/about.html",
            controller: "CmCtrl"
        })
        // .when("/portofolio", {
        //     templateUrl : "about/about.html",
        //     controller: "CmCtrl"
        // })
        .when("/courses", {
            templateUrl : "courses/courses.html",
            controller: "CmCtrl"
        })
        .otherwise({
            redirectoTo:'/404'
        });
    $locationProvider.html5Mode(true);
});