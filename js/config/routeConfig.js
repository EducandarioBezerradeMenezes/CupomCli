//Configuração de Rotas
//Cria as rotas da aplicação

//Inseri as configurações de rotas no modulo cupom
angular.module("cupom").config(function($routeProvider){

  //Tela de Log In
  $routeProvider.when("/LogIn",{
    templateUrl: "view/logIn.html",
    controller:  "logInCtrl",
  });

  //Tela Principal
  $routeProvider.when("/Cupom",{
    templateUrl: "view/cupom.html",
    controller:  "cupomCtrl",
  });

  //Redireciona para tela Principal
  $routeProvider.otherwise({
    redirectTo: "/Cupom",
  });
});