//logIn Controller
//Controla a tela de logIn

//Inserio o controller no modulo cupom
angular.module("cupom").controller("passwordCtrl", function($scope, $rootScope, userApi, $cookies){

  //Muda a senha do usuaario logado
  $scope.changePassword = function(password){

    //Inseri a nova senha no usuario
    $scope.user.password = password.first;

    //Manda nova senha para backend
    if(password.first == password.second) userApi.changePassword($scope.user).success(result =>{

      $scope.result = result;

      //Remove Senha do Escopo
      $scope.user.password = undefined;

      //Limpa Campos
      $scope.password.first  = "";
      $scope.password.second = "";
    });

    //Senhas digitadas não batem
    else{
      $scope.result = "error";

      //Limpa Campos
      $scope.password.first  = "";
      $scope.password.second = "";
    }

  }

  //Verifica se existe um usuario logado
  var checkLogIn = function(){

    //Passa suas informações para o escopo
    if($cookies.getObject("user")) $scope.user = $cookies.getObject("user");

    //Redireciona para a tela de Log In
    else $location.path("/LogIn");
  }

  //Cancela o Erro
  $scope.cancel = function(){
    $scope.error = undefined;
  }

  //Volta para login se não existe usuario logado
  checkLogIn();

  //Titulo da pagina
  $rootScope.title = "Cupom - Mudar Senha";

});
