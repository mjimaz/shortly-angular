angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links, Auth) {
  // Not currently using $scope.link
  $scope.link = {};
  $scope.addLink = function (url) {
    console.log(url);
    Links.addOne({url: url});
    $scope.url = '';
  };

  $scope.signout = function () {
    Auth.signout();
  };

});
