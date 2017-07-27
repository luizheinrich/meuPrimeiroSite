

(function(){
    
    "use strict"
    angular.module("myApp").controller("restritoCtrl",[restritoCtrl]);
    
    function restritoCtrl(){
    
        var vm = this;

        vm.students = 
        
        
        [
       {
            nome : "Rodrigo",
            nota : "7"
        },{
            nome : "Luiz",
            nota : '7.5'
        },{
            nome : "Patrício",
            nota : '3.9'
        },{
            nome : "Ludwig Boltzmann",
            nota : '2.5'
        }
         ]
        
  
        
        
        
        

        vm.sortBy = function(propertyName) {
            
        
        vm.propertyName = propertyName;
        
        }
     
    
    };
   

})();

