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

  // individual views
  .state('mixer', {
    url: '/mixer',
    templateUrl: "mixer/mixer.html",
    controller: 'MixerCtrl'
  })

  .state('board', {
    url: '/board',
    templateUrl: 'board/board.html',
    controller: 'BoardCtrl'
  })

  // top down split views
  .state('topBottomViews', {
    url: '/topBottomViews',
    views: {
      'board': {
        templateUrl: 'board/board.html',
        controller: "BoardCtrl"
      },
      'mixer': {
        templateUrl: 'mixer/mixer.html',
        controller: 'MixerCtrl'
      }
    }
  })

  // side menu views
  .state('main', {
    url: "/main",
    abstract: true,
    // templateUrl: "menu/menu.html"
    views: {
      'board': {
        templateUrl: 'board/board.html'
      },
      'main': {
        templateUrl: 'menu/menu.html'
      }
    }
  })

  .state('main.tops', {
    url: "/tops",
    views: {
      'menuContent' : {
        templateUrl: "tops/tops.html",
        controller: function($scope) {
          $scope.tops = [
            {
              img: 'imgs/tops/top1.png'
            },
            {
              img: 'imgs/tops/top2.png'
            },
            {
              img: 'imgs/tops/top3.png'
            }
          ];
        }
      }
    }
  })

  .state('main.bottoms', {
    url: "/bottoms",
    views: {
      'menuContent' : {
        templateUrl: "bottoms/bottoms.html",
        controller: function($scope) {
          $scope.bottoms = [
            {
              img: 'imgs/bottoms/bottom1.png'
            },
            {
              img: 'imgs/bottoms/bottom2.png'
            },
            {
              img: 'imgs/bottoms/bottom3.png'
            }
          ];
        }
      }
    }
  })
  
  ;

  $urlRouterProvider.otherwise('/main/tops');
}]);
