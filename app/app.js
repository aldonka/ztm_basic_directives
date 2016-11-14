'use strict';
angular.module('myApp', [
  'ngRoute', 'ngResource', 'ngAnimate'
]).
config([ '$routeProvider', function( $routeProvider) {
  $routeProvider
      .when('/main', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/main'
      });
}]);
