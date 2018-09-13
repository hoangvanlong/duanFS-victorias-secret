angular.module('non.router', []).config(_nonRoute)

function _nonRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('non', {
            url: '/non',
            data: {
                pageTitle: 'shop nón'
            },
            views: {
                "@": {
                    controller: 'NonController',
                    templateUrl: '/views/non.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}