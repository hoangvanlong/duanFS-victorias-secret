angular.module('home_sip.controller', []).controller("Home_sipController", _home_sipController)

function _home_sipController($scope, $http) {
    $http({
        method: 'GET',
        url: '/db/main.json'
    }).then(function(response) {
        $scope.data = eval(response.data.settings);
    }, function(error) {
        console.log('Lỗi 001 - áo: ' + error);
    });
}