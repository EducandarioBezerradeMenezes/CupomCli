//logIn Controller
//Controla a tela de logIn

//Inserio o controller no modulo cupom
angular.module("cupom").controller("logInCtrl", function($scope, $rootScope, userApi, $cookies, $location){

  //Faz o Log in do Usuario
  $scope.logIn = function(user){

    //Envia um usuario e recebe suas informações ou erro
    userApi.logIn(user).success(result =>{

      //Usuario não existe
      if(result == "user") $scope.error = result;

      //Senha incorreta
      else if(result == "password") $scope.error = result;

      //Log In com sucesso
      else{

        //Guarda usuario nos Cookies do Navegador
        $cookies.putObject("user", result);

        //Redireciona para a tela principal
        $location.path("/Cupom");
      }
    });
  }

  //Cancela o Erro
  $scope.cancel = function(){
    $scope.error = undefined;
  }

  //Titulo da pagina
  $rootScope.title = "Cupom - LogIn";

});
