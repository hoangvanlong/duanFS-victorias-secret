var app = angular.module('fullStackApp', [
	'ngAnimate',
	'ngSanitize',
	// Thư viện
	'toastr',
	'ui.router',
	'ui.bootstrap',
	// App |  Hệ thống
	'app.config',
	'app.run',
	'app.routers',
	// App | Tùy chỉnh
	'app.filters',
	'app.controllers',
	'app.directives',
]);
