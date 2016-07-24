/// <reference path="typings/angularjs/angular.d.ts" />
/// <reference path="typings/angularjs/angular-route.d.ts" />
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    "use strict";
    var Routes = (function () {
        function Routes($routeProvider) {
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
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    angular.module("HelloApp").config(Routes);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
