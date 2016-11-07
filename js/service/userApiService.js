//User API
//Chamadas HTTP relacionadas a usuarios

//Inseri o serviço no modulo cupom
angular.module("cupom").factory("userApi", function($http, config){

  //Cria um novo usuario
  var _postUser = function(user){

    return $http.post(config.baseUrl + "/user", user);
  }

  //Faz Log-in com usuario informado
  var _logIn = function(user){

    return $http.post(config.baseUrl + "/logIn", user);
  }

  //Altera senha do usuario
  var _changePassword = function(user){

    return $http.put(config.baseUrl + "/user", user);
  }

  //Recupera senha de um usuario
  var _recoverUser = function(user){

    return $http.put(config.baseUrl + "/logIn", user);
  }

  //Funções para serem usadas no controller
  return{
    postUser:       _postUser,
    logIn:          _logIn,
    changePassword: _changePassword,
    recoverUser:    _recoverUser,
  };
});
