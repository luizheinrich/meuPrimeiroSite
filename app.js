angular.module('myApp', ['ngMaterial', 'ui.router'])

.run(["$rootScope", "$state" ,function($rootScope, $state){
    console.log("Acabei de acessar o site ");
    
    $rootScope.isLogedIn = false;
    
     $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState) {
         console.log("Indo para a pagina: ", toState.name);
         
                   
   if (toState.authenticate && !$rootScope.isLogedIn) {
     console.log("Precisa Autenticar");
     event.preventDefault();
     $state.go('restrito');
    }             
                   
})
   
}])





.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

 $stateProvider

        // Página Home
          .state('home', {
          url: '/home',
          templateUrl: 'www/components/home/home.html',
          controller: 'homeCtrl as vm'
         })



        // Página Login
          .state('login', {
          url: '/login',
          templateUrl: 'www/components/login/login.html',
          controller: 'loginCtrl as vm'
         })
    
    

        // Página Cadastro
          .state('cadastro', {
          url: '/cadastro',
         
          templateUrl: 'www/components/cadastro/cadastro.html',
          controller: 'SignupCtrl as vm'


          })
    
    
        // Página Acesso Restrito
          .state('restrito', {
          url: '/restrito',
          authenticate: true,
          templateUrl: 'www/components/restrito/restrito.html',
          controller: 'restritoCtrl as vm'    
          })
    
    
        // Página Sobre
          .state('sobre', {
          url: '/sobre',
         
          templateUrl: 'www/components/sobre/sobre.html',
          controller: 'sobreCtrl as vm'


          })
    
    
        // Página Contato
          .state('contato', {
          url: '/contato',
         
          templateUrl: 'www/components/contato/contato.html',
          controller: 'contatoCtrl as vm'


          })
    
    
    
   // authenticate: true,
    
    
    
    

 $urlRouterProvider.otherwise('/home');

}]);