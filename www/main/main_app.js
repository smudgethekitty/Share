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

  .state('mixer', {
    url: '',
    // abstract: false,
    templateUrl: "mixer/mixer.html",
    controller: 'MixerCtrl'
    // views: {
    //   'board': {
    //     templateUrl: 'board/board.html',
    //     controller: 'boardCtrl'
    //   },
    //   'mixer': {
    //     templateUrl: 'mixer/mixer.html',
    //     controller: 'mixerCtrl'
    //   }
    // }
  })

/*
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
*/

  $urlRouterProvider.otherwise('');
}]);
