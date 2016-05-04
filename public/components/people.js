(function () {
	'use strict';

	angular.module('myStarWars')

	.component('starWarsPeople', {
		templateUrl: 'templates/people.html',
		controller: starWarsPeopleController
	});

	// starWarsPeopleController.$inject = ['starWarsApi'];	//FOR MINIFICATION

	function starWarsPeopleController(starWarsApi) {
		
		var vm = this;

		vm.$onInit = activate;
        		
		vm.people = [];
        
        vm.currentPage = 0;
		
		function activate() {
			
            vm.getData = function(direction){
                vm.currentPage += direction
                starWarsApi.getPeople(vm.currentPage).then(function(data){
                    vm.people = data.results;
                    vm.next = data.next;
                    vm.prev = data.previous;
                });
            };
            vm.getData(1);
		}	

	}	
})();