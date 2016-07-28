/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {
    "use strict";

    class Routes {
        static $inject = ["$routeProvider"]
        
        constructor($routeProvider: ng.route.IRouteProvider){
            $routeProvider
                .when("/search", {
                    templateUrl: "/client/HaveIBeenPwned/views/_search.html",
                    controller: "SearchController",
                    controllerAs: "vm"
                })
                .otherwise({
                    redirectTo: "/search"
                });
        }
    }

    angular.module("HaveIBeenPwned").config(Routes);
}