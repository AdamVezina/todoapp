//setup angular
var app = angular.module('todo', ['ionic']);
var app = angular.module('todo', ['ionic', 'LocalStorageModule']);

app.config(function (localStorageServiceProvider) {
	localStorageServiceProvider.setPrefix('todo');
});