var app = angular.module('theApp', ['ui.router']);

app.run(['$state', function($state) {
  $state.transitionTo('english.home');
}]);

app.controller('stateController', function($scope, $state) {

  let checkRouteValues = (oldValue, newValue) => {
    if(oldValue === 'english.home' && newValue === 'french') {
      $state.go('french.home');
    }
    if(oldValue === 'french.home' && newValue === 'english') {
      $state.go('english.home');
    }
    if(oldValue === 'english.prices' && newValue === 'french') {
      $state.go('french.prices');
    }
    if(oldValue === 'french.prices' && newValue === 'english') {
      $state.go('english.prices');
    }
    if(oldValue === 'english.hours' && newValue === 'french') {
      $state.go('french.hours');
    }
    if(oldValue === 'french.hours' && newValue === 'english') {
      $state.go('english.hours');
    }
    if(oldValue === 'english.location' && newValue === 'french') {
      $state.go('french.location');
    }
    if(oldValue === 'french.location' && newValue === 'english') {
      $state.go('english.location');
    }
    if(oldValue === 'english.snacks' && newValue === 'french') {
      $state.go('french.snacks');
    }
    if(oldValue === 'french.snacks' && newValue === 'english') {
      $state.go('english.snacks');
    }



    if(oldValue === 'english.home' && newValue === 'english') {
      $state.go('english.home');
    }
    if(oldValue === 'english.prices' && newValue === 'english') {
      $state.go('english.prices');
    }
    if(oldValue === 'english.hours' && newValue === 'english') {
      $state.go('english.hours');
    }
    if(oldValue === 'english.location' && newValue === 'english') {
      $state.go('english.location');
    }
    if(oldValue === 'english.snacks' && newValue === 'english') {
      $state.go('english.snacks');
    }



    if(oldValue === 'french.home' && newValue === 'french') {
      $state.go('french.home');
    }
    if(oldValue === 'french.prices' && newValue === 'french') {
      $state.go('french.prices');
    }
    if(oldValue === 'french.hours' && newValue === 'french') {
      $state.go('french.hours');
    }
    if(oldValue === 'french.location' && newValue === 'french') {
      $state.go('french.location');
    }
    if(oldValue === 'french.snacks' && newValue === 'french') {
      $state.go('french.snacks');
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
      templateUrl: 'views/english.html'
    })
    .state('french', {
      url: '/fr',
      templateUrl: 'views/french.html'
    })
    // .state('chinese', {
    //   url: '/ch',
    //   templateUrl: 'views/chinese.html'
    // })

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
