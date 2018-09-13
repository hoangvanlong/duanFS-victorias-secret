angular.module('ao.controller', []).controller("AoController", _aoController)

function _aoController($scope, $http) {
    $http({
        method: 'GET',
        url: '/db/ao.json'
    }).then(function(response) {
        $scope.data = eval(response.data.ao);
    }, function(error) {
        console.log('Lỗi 001 - áo: ' + error);
    });
}