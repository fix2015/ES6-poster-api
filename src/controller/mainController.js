/**
 * Created by semianchuk on 08.10.16.
 */
angular.module('angularApp')
    .controller('mainController',
        [ '$scope', 'filmCollectionFactory', 'mainService', 'mainProvider', 'tmdbMovie', 'tmdbTV','tmdbGenre', 'genreFactory', '$state',
        ($scope, filmCollectionFactory, mainService, mainProvider, tmdbMovie, tmdbTV, tmdbGenre, genreFactory, $state) => {
            var id = 28;
            if($state.params.id){
                id = $state.params.id
                $scope.nameOfQuery = $state.params.title
            }

            $scope.page = 1;
            $scope.currentCollections = filmCollectionFactory.getCollections();

            // Get list by genre film
            var getListMovieByGenre = (id, page)=>{
                return new Promise((resolve, reject) => {
                    tmdbGenre.getListMovieByGenre({id: id, language: 'ru', page: page, include_adult: true, sort_by: 'asc'},
                        (data)=>{
                            filmCollectionFactory.addCollections(data.results);
                            resolve(data);
                        },
                        (error)=>{
                            reject(error);
                        });
                })
            }

            // get category list
            var genreList = ()=>{
                return new Promise((resolve, reject) => {
                    tmdbGenre.movieList({id: id, language: 'ru', include_adult: true, sort_by: 'asc'},
                        (data)=>{
                            genreFactory.addGenres(data.genres)
                            resolve(data.genres)
                        },
                        (error)=>{
                            reject(error)
                        });
                })
            }

            // func for infinity scroll
            $scope.load = {};
            $scope.load.busy = false;
            $scope.load.loadMore = function(){
                var collection = $scope.currentCollections.length || 0,
                    countCollection = collection/20
                if (this.busy) return;
                this.busy = true;
                if ($scope.page < countCollection) {
                    $scope.page++;
                    this.busy = false;
                }else if ($scope.page >= countCollection){
                    console.log(id)
                    console.log($scope.page)
                    getListMovieByGenre(id, $scope.page).then(()=>{
                        this.busy = false;
                        $scope.page++;
                    });

                }else{
                    this.busy = false;
                }
            }

            // run
            genreList()
                .then(filmCollectionFactory.removeCollection())
                .then(getListMovieByGenre(id, $scope.page))

            
        }]);