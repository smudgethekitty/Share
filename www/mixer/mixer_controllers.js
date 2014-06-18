angular.module('mixer.controllers', [])

.controller('MixerCtrl', ['$scope', '$ionicSlideBoxDelegate', function($scope, $ionicSlideBoxDelegate) {
  $scope.nextSlide = function() {
    var nextIndex = ($ionicSlideBoxDelegate.currentIndex() + 1) % $ionicSlideBoxDelegate.slidesCount();
    console.log('Current Index:', nextIndex);
    $ionicSlideBoxDelegate.slide(nextIndex);
  };

  $scope.prevSlide = function() {
    if ($ionicSlideBoxDelegate.currentIndex() === 0) {
      prevIndex = $ionicSlideBoxDelegate.slidesCount() - 1;
    } else {
      prevIndex = $ionicSlideBoxDelegate.currentIndex() - 1;
    }
    console.log('Current Index:', prevIndex);
    $ionicSlideBoxDelegate.slide(prevIndex);
  };

  $scope.items = [
    {
      name: 'top1',
      img: 'mixer/imgs/tops/top1.png'
    },
    {
      name: 'top2',
      img: 'mixer/imgs/tops/top2.png'
    },
    {
      name: 'top3',
      img: 'mixer/imgs/tops/top3.png'
    }
  ];
}]);
