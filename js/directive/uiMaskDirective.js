//Diretiva de Mascara
//Limita o tamanho e tipos de caracteres

//Inseri a diretiva no modulo cupom
angular.module("cupom").directive("uiMask",function(){
  return{

    //Precisa da diretiva ngModel para funcionar
    require: "ngModel",

    /*
      E = Element
      A = Attribute
      C = Class
      M = Comment
    */

    //Restrito ao atributo
    restrict:"A",

    //Funções que serão executadas pela diretiva
    link: function(scope, element, attrs, ctrl){

      //Limita o tipo de caracter e o tamanho do valor
      var _maskValue = function(valor, length, remove){

        //Retorna valor vazio se este está vazio
        if(!valor) return valor;

        //Remove caracteres invalidos
        valor = valor.replace(remove,"");

        //Limita o tamanho do valor
        if(valor.length>length){
          valor = valor.substring(0, length);
        };

        //Retorna o valor formatado
        return valor;
      };

      //Executa função quando uma tecla é pressionada
      element.bind("keyup", function(){

        //Separa informação de tamanho e caracteres a serem removidos
        var length = attrs.uiMask.split(',')[0];
        var remove = attrs.uiMask.split(',')[1];

        //Cria uma expressão regular
        remove = new RegExp(remove, "g");

        //Executa a função de formatação e a inseri na view
        ctrl.$setViewValue(_maskValue(ctrl.$viewValue, length, remove));

        //Renderiza o valor formatado
        ctrl.$render();
      });

    },
  };
});
