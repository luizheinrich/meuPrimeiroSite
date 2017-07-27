


(function(){
    
    "use strict"
    angular.module("myApp").controller("SignupCtrl",[SignupCtrl]);
    
    function SignupCtrl(){
    
        var vm = this;
    
    vm.newUser = {name : "Nome de Usuário", email:"SeuE-mail@SeuDominio.com", password: "Senha de Usuário", address:"Av, Bairro, Logradouro", phone:"(+XX)(DDD) xxxx-xxxx", cb1:false, sex:"NULL" };
   
        
    vm.cadastro = function(){
      var  x;
        
x = vm.newUser.name + ", " +vm.newUser.email+ ", "+vm.newUser.password+ ", "+vm.newUser.phone+ ", "+vm.newUser.address+ ", "+vm.newUser.sex+", "+vm.newUser.cb1;
   
     console.log(x)
    };
    
    
    };
   
})();