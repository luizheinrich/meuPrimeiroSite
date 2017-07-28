(function(){
    
    "use strict"
    angular.module("myApp").controller("homeCtrl",[homeCtrl]);
    
    function homeCtrl(){
    
        var vm = this;

        vm.credentials = 
        
        
        [
       {
            email : "mr.robot@devsufpa.com",
            senha : "1234"
        }]
        
    
    };
   

})();