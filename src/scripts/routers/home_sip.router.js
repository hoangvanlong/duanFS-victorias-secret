angular.module('home_sip.router', []).config(_home_sipRoute)

function _home_sipRoute($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home_sip', {
            url: '/home_sip',
            data: {
                pageTitle: 'quần sip'
            },
            views: {
                "@": {
                    controller: 'Home_sipController',
                    templateUrl: '/views/home_sip.html',
                },
                "menu@": {
                    controller: 'MenuController',
                    templateUrl: '/views/menu.html'
                }
            }
        });
}