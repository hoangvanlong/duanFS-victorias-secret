angular.module('bras.controller', []).controller("BrasController", _brasController)

function _brasController($scope, $http, toastr) {
    $http({
        method: 'GET',
        url: '/db/bras.json'
    }).then(function(response) {
        $scope.bras = eval(response.data.bras);
        toastr.success('Init thành công!', 'Thông báo!', {
            timeOut: 5000
        })
    }, function(error) {
        console.log('Lỗi 000 - bras: ' + error);
    });
}