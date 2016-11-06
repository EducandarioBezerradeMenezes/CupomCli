//Modulo de Mascara
//Cria uma diretiva para mascarar elementos

//Cria o modulo da biblioteca
angular.module("uiMask", []);

//Inseri a diretiva no modulo cupom
angular.module("uiMask").directive("uiMask",function(){
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

      //Tamanho do input
      var length = 0;

      //Limita o tipo de caracter e o tamanho do valor
      var _maskValue = function(Value, Mask){

        //Retorna valor vazio se este está vazio
        if(!Value) return Value;

        //Novo valore a ser inserido
        var nValue = "";

        //Contador
        var count = 0;

        //Valores a serem inseridos
        var Insert = [];

        //Recupera valores a serem inseridos
        Mask.split("").forEach(mask =>{
          count ++;

          //Mascara não é tipo
          if(mask.match(/[^a-zA-Z0-9]/)){

            //Valor a ser Inserido
            Insert[count] = mask;
          }
        });

        //Remove caracteres auto inseridos
        Mask = Mask.replace(/[^a-zA-Z0-9]+/g,"");
        Value = Value.replace(/[^a-zA-Z0-9]+/g, "");

        //Reinicia Count
        count = 0;

        //Para cada um dos novos caracteres digitados
        Value.split("").forEach(value =>{

          //Limita tipo de caracteres
          mask = Mask.substring(count, count + 1);

          //Alfanumerico minusculo
          if(mask.match(/[a-z]/)) mask = "a-" + mask + "0-9";
          //Alfanumerico maiusculo
          else if(mask.match(/[A-Z]/)) mask = "A-" + mask + "0-9";
          //Numerico
          else if(mask.match(/[0-9]/)) mask = "0-" + mask;

          //Expressão regular
          mask = "[^" + mask + "]";

          //Mascara para posição
          mask = new RegExp(mask, "g");

          //Remove caracteres invalidos
          value = value.replace(mask,"");

          //Novos Valores
          nValue = nValue + value;

          //Proxima iteração
          count++;
        });

        //Valor formatado
        nValue = nValue.substring(0, Mask.length);

        //Reinicia Count
        count = 0;

        //Inserção de Caracteres
        for(ins in Insert){

          //Tamanho Suficiente para inserção --> Inseri
          if(nValue.length>= ins) nValue = nValue.substring(0, ins - 1) + Insert[ins] + nValue.substring(ins - 1);
        }

        //Retorna Valor Formatado
        return nValue;

      };

      //Executa função quando uma tecla é pressionada
      element.bind("keyup", function(){

        //Executa a função de formatação e a inseri na view
        ctrl.$setViewValue(_maskValue(ctrl.$viewValue, attrs.uiMask));

        //Renderiza o valor formatado
        ctrl.$render();
      });
    },
  };
});
