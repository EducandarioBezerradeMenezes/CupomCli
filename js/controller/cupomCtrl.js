//Cupom Controller
//Controla a tela do cupom

//Inserio o controller no modulo cupom
angular.module("cupom").controller("cupomCtrl", function($scope, $rootScope, botApi, cupomApi, $cookies, $location){

  //Retorna a imagem do captcha a ser resolvido
  $scope.getCaptcha =  function(){

    //Recebe da API a URL da imagem
    botApi.getCaptcha().success(result =>{

      //Mostra a imagem
      captcha.src = result;

      //Captcha já foi resolvido
      if(result == "No Captcha") $scope.postCupom();
    });
  }

  //Cadastra cupons no site da receita
  $scope.postCupom = function(captcha){

    //Envia o captcha a API para o cadastro de cupons
    botApi.postCupom(captcha).success(result =>{

    });
  }

  //Cadastra chaves no site da receita
  $scope.postChave = function(captcha){

    //Envia o captcha a API para o cadastro de chaves
    botApi.postChave(captcha).success(result =>{

    });
  }

  //Recebe informações dos estados dos cupons
  $scope.getCupom = function(date){

    //Delimita ou não a data dos cupons
    cupomApi.getCupom(date).success(result =>{

      //Mostra as informações
      $scope.cupons = result;
    });
  }

  //Recebe informações dos estados das chaves
  $scope.getChave = function(date){

    //Delimita ou não a data das chaves
    cupomApi.getChave(date).success(result =>{

      //Mostra as informações
      $scope.chaves = result;
    });
  }

  //Verifica se existe um usuario logado
  var checkLogIn = function(){

    //Passa suas informações para o escopo
    if($cookies.getObject("user")) $scope.user = $cookie.getObject("user");

    //Redireciona para a tela de Log In
    else $location.path("/LogIn");
  }

  //Faz o Log Out no sistema
  $scope.logOut = function(){

    //Remove user dos cookies
    $cookies.remove("user");

    //Retorna para a tela de Log In
    $location.path("/LogIn");
  }

  //Titulo da pagina
  $rootScope.title = "Cupom - Info";

  //Usuario Logado
  $scope.user = {};

  //Cupons Mostrados
  $scope.cupons = {};

  //Chaves Mostradas
  $scope.chaves = {};

  //Verifica o Log In
  //checkLogIn();

  //Mostra os estados de todos os cupons cadastrados
  $scope.getCupom();

  //Mostra os estados de todas as chaves cadastradas
  $scope.getChave();
});
