var componentes = angular.module('meusComponentes', []);

componentes.directive('meuPainel', function () {
	var directive = {};

	directive.restrict = 'EA';
	directive.scope = {
		titulo: '@'
	};
	directive.transclude = true;

	directive.templateUrl = 'js/directives/meus-componentes/meu-painel.html';

	return directive;
});

componentes.directive('meuBotaoAviso', function () {
	return {
		restrict: 'E',
		scope: {
			nome: '@',
			acao: '&'
		},
		template: '<button ng-click="acao()" class="btn btn-warning">'
			+ '{{nome}}'
		+ '</buttom>'
	};
});

componentes.directive('meuFocus', function () {
	return {
		restrict: 'A',
		scope: {
			evento: '@'
		},
		link: function (scope, element) {
			// Quando recebia um parametro de variavel focus
			/*scope.$watch('focus', function () {
				if(scope.focus) {
					element[0].focus();
					scope.focus = false;
				}
			});*/
			scope.$on(scope.evento, function () {
				element[0].focus();
			});
		}
	}
});