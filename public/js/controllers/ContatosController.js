angular.module('contatooh').controller('ContatosController', ['$scope', '$routeParams', '$http', '$resource', function ($scope, $routeParams, $http, $resource) {
	$scope.total = 1;
	$scope.contatos = [];
	$scope.filtro = '';

	/*
	$http.get('/contatos')
	.success(function (data) {
		$scope.contatos = data;
	})
	.error(function (statusText) {
		console.log('Não foi possível obter a lista de contatos');
		console.log(statusText);
	});
	*/
	$scope.mensagem = {texto: ''};

	var Contato = $resource('/contatos/:id');

	function buscaContatos() {
		Contato.query(
			function (contatos) {
				$scope.contatos = contatos;
			},

			function (erro) {
				$scope.mensagem = {
					texto: 'Não foi possível obter a lista de contatos'
				};

				console.log(erro);
			}
		);
	}

	buscaContatos();

	$scope.remove = function (contato) {
		Contato.delete({id: contato._id}, 
			buscaContatos,
			function (erro) {
				$scope.mensagem = {
					texto: 'Não foi possível remover o contato'
				};

				console.log(erro);
			});
	};
}]);