/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />
var HaveIBeenPwned;
(function (HaveIBeenPwned) {
    var PwnedService = (function () {
        function PwnedService($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        PwnedService.prototype.check = function (address) {
            console.log(address);
            return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);
        };
        PwnedService.$inject = ["$http", "$q"];
        return PwnedService;
    }());
    angular.module("HaveIBeenPwned").service("PwnedService", PwnedService);
})(HaveIBeenPwned || (HaveIBeenPwned = {}));
