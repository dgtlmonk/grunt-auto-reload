var app = angular.module('myDirective',['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('directive-1',{
      url:'/d1',
      templateUrl:'partials/directive-1.html'
  })
 .state('directive-2',{
      url:'/d2',
      templateUrl:'partials/directive-2.html'
  })


});

