(function () {
	'use strict';

	angular.module('myStarWars')

	.factory('starWarsApi', ['$q', '$http', function ($q, $http) {

		var urlBase = 'http://swapi.co/api/';

		function getPeople() {

			var deferred = $q.defer();
			
			$http.get(urlBase + 'people').then(function (resp) {
				if (resp.status === 200) {
					deferred.resolve(resp.data.results);
				}
				else {
					deferred.reject(resp.statusText);
				}
			});
			
			return deferred.promise;
		}
		
		function getPerson(id) {

			var deferred = $q.defer();
			
			$http.get(urlBase + 'people/' + id).then(function (data) {

				if (resp.status === 200) {
					deferred.resolve(resp.data.results);
				}
				else {
					deferred.reject(resp.statusText);
				}
			});
			
			return deferred.promise;
		}

		return {
			getPeople: getPeople,
			getPerson: getPerson
		};
	}]);
})();