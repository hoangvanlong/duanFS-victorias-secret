angular.module('main.controller', []).controller("MainController", _mainController)

function _mainController($scope, $http, toastr) {
    $http({
        method: 'GET',
        url: '/db/main.json'
    }).then(function(response) {
        $scope.data = eval(response.data.settings);
        $scope.content = eval(response.data.content);
        toastr.success('Init thành công!', 'Thông báo!', { timeOut: 5000 })
    }, function(error) {
        console.log('Lỗi 000 - Main: ' + error);
    });

}