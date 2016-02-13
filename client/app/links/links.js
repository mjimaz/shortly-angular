angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, Auth) {
  $scope.data = {};
  Links.getAll().then(function (links) {
    $scope.data.links = links;
  });
  // $scope.authenticate = true;
  $scope.signout = function () {
    Auth.signout();
  };

});
