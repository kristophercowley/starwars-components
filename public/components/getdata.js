(function(){
    'use strict';

	angular.module('myStarWars')

	.component('getData', {
		templateUrl: 'templates/getdata.html',
		controller: GetDataController,
		bindings:{
			next: "=",
			prev: "=",
			getdata: "="
		}
	});
    
    function GetDataController(){
        var vm = this;
		vm.getdata(1)
		vm.nextprev = function(n){
			vm.getData(n)
		}
    }
})()