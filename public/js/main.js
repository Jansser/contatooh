var app = angular.module('contatooh', ['ngRoute', 'ngResource']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/contatos', {
		templateUrl: 'partials/contatos.html',
		controller: 'ContatosController'
	})
	.when('/contatos/:id/', {
		templateUrl: 'partials/contato.html',
		controller: 'ContatosController'
	})
	.otherwise({redirectTo: '/contatos'});
}]);