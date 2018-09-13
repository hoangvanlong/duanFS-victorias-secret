angular.module('non.controller', []).controller("NonController", _nonController)

function _nonController($scope, $http) {
    $http({
        method: 'GET',
        url: '/db/non.json'
    }).then(function(response) {
        $scope.data = eval(response.data.non);
    }, function(error) {
        console.log('Lỗi 001 - nón: ' + error);
    });
}