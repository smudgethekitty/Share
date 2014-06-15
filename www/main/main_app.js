angular.module('main', ['ionic', 'main.services', 'board.controllers', 'mixer.controllers'])

.run(['$rootScope', '$ionicPlatform', function($rootScope, $ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
}])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('main', {
    url: "/main",
    abstract: true,
    templateUrl: "main/main.html"
  })

  .state('main.board', {
    url: '/board',
    views: {
      'main-board': {
        templateUrl: 'board/board.html',
        controller: 'boardCtrl'
      }
    }
  })

  .state('main.mixer', {
    url: '/mixer',
    views: {
      'main-mixer': {
        templateUrl: 'mixer/mixer.html',
        controller: 'mixerCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/main/board');
}]);
