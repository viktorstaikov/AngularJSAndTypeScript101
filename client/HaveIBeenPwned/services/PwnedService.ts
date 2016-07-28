/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {
	export interface IPwnedService {
		check(address:string) : ng.IPromise<{}>;
	}

	class PwnedService implements IPwnedService {
		static $inject = ["$http", "$q"];

		constructor(private $http: ng.IHttpService, private $q: ng.IPromise<{}>) {
		}

		check(address:string) : ng.IPromise<{}>{
			console.log(address);
			return this.$http.get("https://haveibeenpwned.com/api/v2/breachedaccount/" + address);    
		}
	}

	angular.module("HaveIBeenPwned").service("PwnedService", PwnedService);
}