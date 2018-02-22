CM.config(function($routeProvider,$locationProvider){
    $routeProvider
        .when("/", {
            templateUrl : "index.html",
            controller: "CmCtrl"
        })
        .when("/404", {
            templateUrl : "404/404.html"
        })
        .when("/about", {
            templateUrl : "about/about.html",
            controller: "CmCtrl"
        })
        .when("/resume", {
            templateUrl : "resume/resume.html",
            controller: "CmCtrl"
        })
        .when("/courses", {
            templateUrl : "courses/courses.html",
            controller: "CmCtrl"
        })
        .when("/projects", {
            templateUrl : "projects/projects.html",
            controller: "CmCtrl"
        })
        .when("/blog", {
            templateUrl : "blog/blog.html",
            controller: "CmCtrl"
        })
        .otherwise({redirectTo: '/'})
        $locationProvider.html5Mode(true);
});
