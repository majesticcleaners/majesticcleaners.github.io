var app = angular.module('theApp', ['ui.router']);

app.run(['$state', function($state) {
  $state.transitionTo('english.home');
}]);

app.controller('stateController', function($scope, $state) {

  let checkRouteValues = (oldValue, newValue) => {
    if(oldValue === 'english.home' && newValue === 'french') {
      $state.go('french.home');
    }
    else if(oldValue === 'french.home' && newValue === 'english') {
      $state.go('english.home');
    }
    else if(oldValue === 'english.prices' && newValue === 'french') {
      $state.go('french.prices');
    }
    else if(oldValue === 'french.prices' && newValue === 'english') {
      $state.go('english.prices');
    }
    else if(oldValue === 'english.hours' && newValue === 'french') {
      $state.go('french.hours');
    }
    else if(oldValue === 'french.hours' && newValue === 'english') {
      $state.go('english.hours');
    }
    else if(oldValue === 'english.location' && newValue === 'french') {
      $state.go('french.location');
    }
    else if(oldValue === 'french.location' && newValue === 'english') {
      $state.go('english.location');
    }
    else if(oldValue === 'english.snacks' && newValue === 'french') {
      $state.go('french.snacks');
    }
    else if(oldValue === 'french.snacks' && newValue === 'english') {
      $state.go('english.snacks');
    }
    else {
      // do nothing
    }
  }

  $scope.currentState = $state;
  $scope.$watch('currentState.current.name', function(newValue, oldValue) {
    checkRouteValues(oldValue, newValue);
  });

});

app.config(function($stateProvider) {
  $stateProvider

    // Languages
    .state('english', {
      url: '/en',
      templateUrl: 'views/#.html',
      abstract: true
    })
    .state('french', {
      url: '/fr',
      templateUrl: 'views/#.html',
      abstract: true
    })

    // English
    .state('english.home', {
      url: '/home',
      templateUrl: 'views/english/home.html'
    })
    .state('english.prices', {
      url: '/prices',
      templateUrl: 'views/english/prices.html'
    })
    .state('english.hours', {
      url: '/hours',
      templateUrl: 'views/english/hours.html'
    })
    .state('english.location', {
      url: '/location',
      templateUrl: 'views/english/location.html'
    })
    .state('english.snacks', {
      url: '/snacks',
      templateUrl: 'views/english/snacks.html'
    })

    // Francais
    .state('french.home', {
      url: '/acceuil',
      templateUrl: 'views/french/home.html'
    })
    .state('french.prices', {
      url: '/couts',
      templateUrl: 'views/french/prices.html'
    })
    .state('french.hours', {
      url: '/heures',
      templateUrl: 'views/french/hours.html'
    })
    .state('french.location', {
      url: '/addresse',
      templateUrl: 'views/french/location.html'
    })
    .state('french.snacks', {
      url: '/rafraichissements',
      templateUrl: 'views/french/snacks.html'
    })

});
