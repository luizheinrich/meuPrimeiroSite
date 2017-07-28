(function () {

 'use strict';
 angular.module('myApp').controller('loginCtrl', ['$rootScope', '$state', loginCtrl]);

 function loginCtrl($rootScope, $state) {
  var vm = this;
     
  vm.userCredentials = {};
  vm.user = {

        email: 'mr.robot@devsufpa.com',
        password: '1234'
      
  }
     
     
   vm.islogedIn = function (userCredentials) {
   console.log(userCredentials);
             
   if (userCredentials.email != vm.user.email) {
            alert("Email errado!");
       
   } else if (userCredentials.password != vm.user.password) {
            alert("Senha errada!");
       
       
       
       
       
   } else {
    $rootScope.isLogedIn = true;
    $state.go('restrito');
       
   }
  };
 }
         


})();
























