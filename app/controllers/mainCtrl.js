angular.module('myApp')
    .controller('MainCtrl', ['$scope', '$rootScope', 'AlbumService', 'DetailsResource', function ($scope, $rootScope, AlbumService, DetailsResource) {
        $scope.today = new Date();
        $scope.input = "blabla";
    }]);