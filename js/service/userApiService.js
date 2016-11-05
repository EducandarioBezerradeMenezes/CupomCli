//User API
//Chamadas HTTP relacionadas a usuarios

//Inseri o serviço no modulo cupom
angular.module("cupom").factory("userApi", function($http, config){


  //Faz Log-in com usuario informado
  var _logIn = function(user){

    return $http.get(config.baseUrl + "/logIn", user);
  }

  //Altera senha do usuario
  var _changePassword = function(user){

    return $http.get(config.baseUrl + "/user", user);
  }

  //Funções para serem usadas no controller
  return{
    logIn:           _logIn,
    changePassword:  _changePassword
  };
});
