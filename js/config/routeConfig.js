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

  //Tela de Mudança de Senha
  $routeProvider.when("/Password",{
    templateUrl: "view/password.html",
    controller:  "passwordCtrl",
  });

  //Tela de Criação de Usuário
  $routeProvider.when("/CreateUser",{
    templateUrl: "view/createUser.html",
    controller:  "createUserCtrl",
  });

  //Redireciona para tela Principal
  $routeProvider.otherwise({
    redirectTo: "/Cupom",
  });
});
