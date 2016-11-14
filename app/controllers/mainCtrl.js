angular.module('myApp')
    .controller('MainCtrl', ['$scope', '$rootScope', 'AlbumService', 'DetailsResource', function ($scope, $rootScope, AlbumService, DetailsResource) {
        $scope.today = new Date();
        $scope.input = "blabla";
        $scope.ex_table = ["pierwszy napis", "drugi", "trzeci"];
        $scope.getInput = function () {
            return $scope.input;
        }
    }]);