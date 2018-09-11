angular.module('panties.router', []).config(_pantiesRoute)

function _pantiesRoute($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
    $stateProvider
        .state('panties', {
            url: '/',
            data: {
                pageTitle: 'Trang chủ'
            },
            views: {
                "@": {
                    controller: 'pantiesController',
                    templateUrl: '/views/panties.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
    $urlMatcherFactoryProvider.caseInsensitive(true);
}