(function () {
	'use strict';

	angular.module('myStarWars')

	.component('starWarsPeople', {
		bindings: {},
		templateUrl: 'templates/people.html',
		controller: starWarsPeopleController
	});

	starWarsPeopleController.$inject = ['starWarsApi'];	

	function starWarsPeopleController(starWarsApi) {
		
		var vm = this;

		vm.$onInit = activate;		
		vm.people = [];
		
		function activate() {
			starWarsApi.getPeople().then(
				function (people) {
					vm.people = people;
				}
			);
		}	

	}	
})();