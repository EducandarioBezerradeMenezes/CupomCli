//Cupom API
//Chamadas HTTP relacionadas a informações de estado

//Inseri o serviço no modulo cupom
angular.module("cupom").factory("cupomApi", function($http, config){


  //Recebe informações dos estados de cupons
  var _getCupom = function(date){

    return $http.put(config.baseUrl + "/Cupom", date);
  }

  //Recebe informações de estados de chaves
  var _getChave = function(date){

    return $http.put(config.baseUrl + "/Chave", date);
  }

  //Funções para serem usadas no controller
  return{
    getCupom:  _getCupom,
    getChave:  _getChave
  };
});
