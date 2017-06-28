var app = angular.module('theApp', ['ui.router']);

app.run(['$state', function($state) {
  $state.transitionTo('home');
}]);

app.controller('stateController', function($scope, $state) {
  $scope.$state = $state;
});

app.config(function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html'
    })
    .state('prices', {
      url: '/prices',
      templateUrl: 'views/prices.html'
    })
    .state('hours', {
      url: '/hours',
      templateUrl: 'views/hours.html'
    })
    .state('location', {
      url: '/location',
      templateUrl: 'views/location.html'
    })
    .state('snacks', {
      url: '/snacks',
      templateUrl: 'views/snacks.html'
    })
});
