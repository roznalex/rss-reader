var app = angular.module('app', ['ngRoute', 'kendo.directives']);

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			controller: 'rssController',
			templateUrl: 'app/views/main.html'
		})
		.otherwise({ 
      		redirectTo: '/' 
    	});
});