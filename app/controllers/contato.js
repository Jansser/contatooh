module.exports = function () {
	var controller = {};
	
	var contatos = [
		{_id: 1, nome: 'Oliver Queen', email: 'cont1@empresa.com.br'},
		{_id: 2, nome: 'Bruce Wayne', email: 'cont2@empresa.com.br'},
		{_id: 3, nome: 'Barry Allen', email: 'cont3@empresa.com.br'}
	];

	controller.listaContatos = function (req, res) {
		res.json(contatos);
	};

	controller.obtemContato = function (req, res) {
		var id = req.params.id;
		var contato = contatos.filter(function (contato) {
			return contato._id == id;
		})[0];

		contato ? res.json(contato) : res.status(404).send('Contato não encontrado');
	};

	controller.removeContato = function (req, res) {
		var id = req.params.id;

		contatos = contatos.filter(function (contato) {
			return contato._id != id;
		});

		res.sendStatus(204).end();
	};

	controller.salvaContato = function (req, res) {
		console.log(req.params);
	};

	return controller;
};