/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url         : '/',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            })            
            .state('category', {
                url         : '/category/:id/:title',
                templateUrl : 'public/templates/home.html',
                controller  : 'mainController'
            })
            .state('search', {
                url         : '/search/:query',
                templateUrl : 'public/templates/home.html',
                controller  : 'searchController'
            })
            .state('watch', {
                url         : '/watch/:id/:title',
                templateUrl : 'public/templates/content.html',
                controller  : 'contentController'
            })
    }]);