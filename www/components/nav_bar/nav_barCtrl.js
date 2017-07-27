

(function() {
    
  'use strict';

  angular.module("myApp").controller("nav_barCtrl", [nav_barCtrl]);

  function nav_barCtrl() {
      
      var vm = this;
      
    vm.currentNavItem = 'home';
  }
})();




