angular.module('contatooh').controller('ContatosController', ['$scope', '$routeParams', 'Contato', function ($scope, $routeParams, Contato) {
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

	if($routeParams.id) {
		Contato.get({id: $routeParams.id}, 
			function (contato) {
				$scope.contato = contato;
			},
			function (erro) {
				$scope.mensagem = {
					texto: 'Não foi possível obter o contato.'
				};

				console.log(erro);
			}
		);
	} else {
		$scope.contato = new Contato();
	}

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

	$scope.salva = function () {
		$scope.contato.$save()
			.then(function (data) {
				$scope.mensagem = {texto: 'Salvo com sucesso'};
				$scope.contato  = data;
			})
			.catch(function (erro) {
				$scope.mensagem = {texto: 'Não foi possível salvar'};
				console.log(erro);
			});
	};
}]);