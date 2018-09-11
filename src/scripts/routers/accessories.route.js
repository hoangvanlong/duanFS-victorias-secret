angular.module('accessories.router', []).config(_accessoriesRoute)

function _accessoriesRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('accessories', {
            url: '/accessories',
            data: {
                pageTitle: 'Accessories'
            },
            views: {
                "@": {
                    controller: 'AccessoriesController',
                    templateUrl: '/views/accessories.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}