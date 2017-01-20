//Cupom Controller
//Controla a tela do cupom

//Inserio o controller no modulo cupom
angular.module("cupom").controller("cupomCtrl", function($scope, $rootScope, botApi, cupomApi, $cookies, $location, $window){

  //Retorna a imagem do captcha a ser resolvido
  $scope.getCaptcha =  function(value){

    $scope.isCupom = value;

    //Recebe da API a URL da imagem
    botApi.getCaptcha().then(result =>{

      //Mostra a imagem
      $scope.image = result;

      //Captcha já foi resolvido
      if(result == "No Captcha") $scope.postCupom();
    });
  }

  //Cadastra cupons no site da receita
  $scope.postCupom = function(captcha){

    //Envia o captcha a API para o cadastro de cupons
    botApi.postCupom(captcha).then(result =>{
      $window.location.reload();
    }).catch((error) => {
      alert(error);
    });
  }

  //Cadastra chaves no site da receita
  $scope.postChave = function(captcha){

    //Envia o captcha a API para o cadastro de chaves
    botApi.postChave(captcha).then(result =>{
      $window.location.reload();
    }).catch((error) => {
      alert(error)
    });
  }

  //Recebe informações dos estados dos cupons
  var getCupom = function(date){

    //Delimita ou não a data dos cupons
    cupomApi.getCupom(date).then(result =>{

      //Mostra as informações
      $scope.cupons = result;
    }).catch((error) => {
      alert(error);
    });
  }

  //Recebe informações dos estados das chaves
  var getChave = function(date){

    //Delimita ou não a data das chaves
    cupomApi.getChave(date).then(result =>{

      //Mostra as informações
      $scope.chaves = result;
    }).catch((error) => {
      alert(error);
    });
  }

  //Cupons e chaves de meses especificos
  $scope.getInfo = function(date){

    //Objeto Mês e Ano
    const monthYear = {
      month: date.split('/')[0],
      year: date.split('/')[1],
      show: true
    };

    //Envia data  para cupons e chaves
    getCupom(monthYear);
    getChave(monthYear);

    //Limpa input de data
    $scope.date= "";
  }

  //Cancela o cadatro
  $scope.cancel = function(){

    //Refresh na  tela
    $window.location.reload();
  }

  //Verifica se existe um usuario logado
  var checkLogIn = function(){

    //Passa suas informações para o escopo
    if($cookies.getObject("user")) $scope.user = $cookies.getObject("user");

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
  $rootScope.title = "Controle de Cupons";

  //Usuario Logado
  $scope.user = {};

  //Cupons Mostrados
  $scope.cupons = {};

  //Chaves Mostradas
  $scope.chaves = {};

  //Informações do Captcha
  $scope.captcha = {};

  //Data Pesquisada
  $scope.date = "";

  //Verifica o Log In
  checkLogIn();

  //Mostra os estados de todos os cupons cadastrados
  getCupom();

  //Mostra os estados de todas as chaves cadastradas
  getChave();

});
