//Create User Controller
//Controla a tela de Criação de usuario

//Inserio o controller no modulo cupom
angular.module("cupom").controller("createUserCtrl", function($scope, $rootScope, userApi, $cookies){

  //Cria um novo usuario
  $scope.createUser = function(user){

    //Digitar todos os campos
    if(user.password.first == "" || user.password.second == "" || user.name == "" || user.email == "") $scope.result="fields";

    //Senhas iguais
    else if(user.password.first == user.password.second){

      //Cria a senha
      user.password = user.password.first;

      //Manda nova senha para backend
      userApi.postUser(user).success(result =>{

        //Criação com sucesso
        if(result=="OK") $scope.result = "OK";

        //Usuario já existe
        else $scope.result = "user";


        //Remove Senha do Escopo
        $scope.user.password = {};

        //Limpa Campos
        $scope.user.name            = "";
        $scope.user.email           = "";
        $scope.user.password.first  = "";
        $scope.user.password.second = "";
      });
    }
    //Senhas digitadas não batem
    else{
       $scope.result = "password";

       //Remove Senha do Escopo
       $scope.user.password = {};

       //Limpa Campos
       $scope.user.name            = "";
       $scope.user.email           = "";
       $scope.user.password.first  = "";
       $scope.user.password.second = "";
     }
  }

  //Verifica se existe um usuario logado
  var checkLogIn = function(){

    //Redireciona para Login se não logado
    if(!$cookies.getObject("user")) $location.path("/LogIn");
  }

  //Cancela o Erro
  $scope.cancel = function(){
    $scope.error = undefined;
  }

  //Volta para login se não existe usuario logado
  checkLogIn();

  //Titulo da pagina
  $rootScope.title = "Cupom - Criar Usuário";


  //Novo usuario
  $scope.user = {};
  $scope.user.password = {};
});
