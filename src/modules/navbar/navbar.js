angular.module('navbar',[])
    .directive('navbar', ['genreFactory', function(genreFactory) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/navbar/navbar.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.genre = genreFactory.getGenres();
            }
        }
    }]);
