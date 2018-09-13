angular.module('about.controller', []).controller("AboutController", _aboutController)

function _aboutController($scope, $http) {
    $http({
        method: 'GET', // POST, PUT, DELETE
        url: '/db/phukien.json',
    }).then(function(response) {
        $scope.data = eval(response.data.phukien);
    }, function(error) {
        console.log('Lỗi 003 -phụ kiện: ' + error);
    });
}