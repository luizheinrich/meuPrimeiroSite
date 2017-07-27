angular.module('myApp').controller('MyController', function ()){
                                   
        var this = vm;
                                   
        vm.name = 'Luiz Henrique';
                                   
        vm.getName = Function(){
    
    vm.name = 'Luiz e Rodrigo';  
};                                                       
)};


angular
  .module('inputIconDemo', ['ngMaterial', 'ngMessages'])
  .controller('DemoCtrl', function($scope) {
    $scope.user = {
      name: 'John Doe',
      email: '',
      phone: '',
      address: 'Mountain View, CA',
      donation: 19.99
    };
  });


angular.module('inputErrorsApp', ['ngMaterial', 'ngMessages'])

.controller('AppCtrl', function($scope) {
  $scope.project = {
    description: 'Nuclear Missile Defense System',
    rate: 500,
    special: true
  };
});