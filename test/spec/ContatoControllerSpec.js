describe('ContatoController', function () {
	var $scope, $httpBackend;

	beforeEach(function () {
		module('contatooh');
		inject(function ($injector) {
			$scope = $injector.get('$rootScope').$new();
			$httpBackend = $injector.get('$httpBackend');

			$httpBackend.when('GET', '/contatos/1')
				.respond({_id: '1'});
			
			$httpBackend.when('GET', '/contatos')
				.respond([{}]);
		});
	});

	it('Deve criar um Contato vazio quando nenhum parâmetro de rota for passado', inject(function ($controller) {
		$controller('ContatosController', 
			{'$scope': $scope});
		
		expect($scope.contato._id).toBeUndefined();
	}));

	it('Deve preencher o Contato vazio quando o parâmetro de rota for passado', inject(function ($controller) {
		$controller('ContatosController', {
				$routeParams: {id: 1},
				'$scope': $scope 
		});	

		$httpBackend.flush();
		expect($scope.contato._id).toBeDefined();
	}));
});