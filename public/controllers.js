(function () {
  angular.module('mySweetWeather')

  .controller('taskController', ['$scope', 'nflService', function($scope, nflService) {

    var vm = this;
    
    vm.tasks = [];
    vm.completed = 0;
    vm.newTask = '';

    $scope.$watch('vm.tasks', function (newValue, oldValue) {
      
      if (vm.tasks.length) { 
        vm.completed = vm.tasks.reduce(function (total, task) {
          return total += task.isDone ? 1 : 0;
        }, 0);
      }
      else {
        vm.completed = 0;
      }
    }, true);
    
    vm.addTask = function () {
      
      vm.tasks.push({
        id: new Date().getTime(),
        description: vm.newTask,
        isDone: false
      });
      
      vm.newTask = '';
    };

    vm.completeTask = function (task) {
      task.isDone = true;
    };

    vm.clearCompleted = function (event) {

      event.preventDefault();
      
      vm.tasks = vm.tasks.filter(function (task) {
        return !task.isDone;
      });
    };

    nflService.getAllPlayers().then(function (players) {
      console.log('Players: ', players);
    });

  }])

  .controller('taskStoreController', ['$scope', 'taskStore', function($scope, store) {

    var vm = this;

    vm.tasks = [];
    vm.completed = 0;
    vm.newTask = '';

    $scope.$watch('vm.tasks', function (newValue, oldValue) {
      
      if (vm.tasks.length) { 
        vm.completed = vm.tasks.reduce(function (total, task) {
          return total += task.isDone ? 1 : 0;
        }, 0);
      }
      else {
        vm.completed = 0;
      }
    }, true);
    
    vm.addTask = function () {

      vm.tasks = store.addTask({
        id: new Date().getTime(),
        description: vm.newTask,
        isDone: false
      });
      
      vm.newTask = '';
    };

    vm.completeTask = function (task) {
      vm.tasks = store.completeTask(task);
    };

    vm.clearCompleted = function (event) {

      event.preventDefault();
      
      vm.tasks = store.clearCompleted();
    };

    store.getTasks().then(function (tasks) {
      vm.tasks = tasks;
    });

  }]);  
})();
