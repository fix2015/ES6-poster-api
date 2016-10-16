angular.module('search',[])
    .directive('search',['tmdbMovie', 'filmCollectionFactory', '$state', function(tmdbMovie, filmCollectionFactory, $state) {
        return {
            restrict: 'E',
            templateUrl: 'src/modules/search/search.html',
            link: function (scope, element, attrs, $rootScope) {
                scope.page = 1;
                scope.search = (event)=>{
                    console.log('search', event.target.value)
                    if(event.which === 13 || event.type === "blur") {
                        $state.go('search', { "query": event.target.value});
                    }
                }
            }
        }
    }]);
