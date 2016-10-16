angular.module('main',[])
    .directive('main', ['filmCollectionFactory', function(filmCollectionFactory) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/main/main.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.collections = filmCollectionFactory.getCollections();
                scope.getCollection = function(){
                    scope.collections = filmCollectionFactory.getCollections();
                }
            }
        }
    }])
    .directive('item', ['domain', function(domain) {
        return {
            restrict: 'E',
            scope: {
                item: '=data'
            },
            templateUrl: 'src/modules/main/item.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.domain = domain;
            }
        }
    }]);
