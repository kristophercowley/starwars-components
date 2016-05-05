(function(){
    'use strict';

	angular.module('myStarWars')

	.component('getData', {
		templateUrl: 'templates/getdata.html',
		controller: GetDataController,
		controllerAs:"vm",
		bindings:{
			next: "<",
			prev: "<",
			changeByOne: "=",
		}
	});
    
    function GetDataController(){
        var vm = this;
		// vm.next = next;
		// vm.prev = prev;
    }
})()