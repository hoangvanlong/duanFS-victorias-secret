angular.module('ao.router', []).config(_aoRoute)

function _aoRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('ao', {
            url: '/ao',
            data: {
                pageTitle: 'shop áo'
            },
            views: {
                "@": {
                    controller: 'AoController',
                    templateUrl: '/views/ao.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}