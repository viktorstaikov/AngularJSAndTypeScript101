/// <reference path="../../../typings/angularjs/angular.d.ts" />
/// <reference path="../../../typings/angularjs/angular-route.d.ts" />

module HaveIBeenPwned {
	export class SearchController {
		static $inject = ["PwnedService"];
		private breachedAccounts : BreachedAccount[]

		constructor(private pwnedService: IPwnedService) {
		}

		submit(address: string) {
			this.pwnedService.check(address).then((result: ng.IHttpPromiseCallbackArg<BreachedAccount[]>) => {
				this.breachedAccounts = result.data;
			})
			.catch((reason:any) => {
				alert(reason.Message || reason.message);
			});
		}
	}

	angular
		.module("HaveIBeenPwned")
		.controller("SearchController", SearchController);
}