//BOT API
//Chamadas HTTP relacionadas ao BOT

//Inseri o serviço no modulo cupom
angular.module("cupom").factory("botApi", function($http, config){

  //Recebe endereço de imagem com captcha
  var _getCaptcha  = function(){

    return $http.get(config.baseUrl + "/Captcha");
  }

  //Envia o Captcha para iniciar cadastro de chaves
  var _postChave = function(captcha){

    return $http.post(config.baseUrl + "/Chave", captcha);
  };

  //Envia o Captcha para iniciar cadastro de cupons
  var _postCupom = function(captcha){

    return $http.post(config.baseUrl + "/Cupom", captcha);
  };

  //Funções para serem usadas no controller
  return{
    getCaptcha: _getCaptcha,
    postChave:  _postChave,
    postCupom:  _postCupom
  };
});
