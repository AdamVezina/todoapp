//setup angular
var app = angular.module('todo', ['ionic']);
var app = angular.module('todo', ['ionic', 'LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider.setPrefix('todo');
});

app.controller('main', function ($scope, $ionicModal, localStorageService) {
	
	//initialize the tasks scope with empty array
	$scope.tasks = [];
	
	//initialize the task scope with empty object
	$scope.task = {};
	
	//configure the ionic modal before use
	$ionicModal.fromTemplateUrl('new-task-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function (modal) {
		$scope.newTaskModal = modal;
	});
	
	$scope.getTasks = function() {
		//fetches task from local storage
		if (localStorageService.get(taskData)) {
			$scope.tasks = localStorageService.get(taskData);
		} else {
			$scope.tasks = [];
		}
	}
	$scope.createTask = function() {
		//creates a new task
		$scope.tasks.push($scope.task);
		localStorageService.set(taskData, $scope.tasks);
		$scope.task = {};
		//close the new task modal
		$scope.newTaskModal.hide();
	}
	$scope.removeTask = function() {
		//removes a task
		$scope.tasks.splice(index, 1);
		localStorageService.set(taskData, $scope.tasks);
	}
	$scope.completeTask = function () {
		//updates a task as completed
		if(index !== -1) {
			$scope.tasks[index].completed = true;
		}
		
		localStorageService.set(taskData, $scope.tasks);
	}
})