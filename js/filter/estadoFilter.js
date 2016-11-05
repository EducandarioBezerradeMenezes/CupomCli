//Filtra o valor do estado
//Valor do Estado --> Mensagem

//Inserio o filtro no modulo cupom
angular.module("cupom").filter("estado", function () {
	return function (input) {

    //Se estado vazio retorna vazio
    if(!input) return input;

    //Numero do estado para sua mensagem
		switch(input){
      case "0": return "Não Cadastrado";

      case "1": return "Cadastro com Sucesso";

      case "2": return "Erro de Cadastro";

      case "3": return "Erro de Captcha";
    }
	};
});
