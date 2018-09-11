angular.module('bras.router', []).config(_brasRoute)

function _brasRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('bras', {
            url: '/bras',
            data: {
                pageTitle: 'Bras'
            },
            views: {
                "@": {
                    controller: 'BrasController',
                    templateUrl: '/views/bras.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}