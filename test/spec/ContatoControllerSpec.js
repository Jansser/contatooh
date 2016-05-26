describe('ContatoController', function () {
	if('Deve criar um Contato vazio quando nenhum parâmetro de rota for passado', function () {
		expect($scope.contato._id).toBeUndefined();
	});
});