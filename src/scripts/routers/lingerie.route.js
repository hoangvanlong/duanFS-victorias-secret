angular.module('lingerie.router', []).config(_lingerieRoute)

function _lingerieRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('lingerie', {
            url: '/lingerie',
            data: {
                pageTitle: 'Lingerie'
            },
            views: {
                "@": {
                    controller: 'LingerieController',
                    templateUrl: '/views/lingerie.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}