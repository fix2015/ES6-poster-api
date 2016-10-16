/**
 * Created by semianchuk on 16.10.16.
 */
angular.module('search')
    .controller('searchController',
        [ '$scope', 'filmCollectionFactory', 'mainService', 'mainProvider', 'tmdbMovie', 'tmdbTV','tmdbGenre', 'genreFactory', '$state',
            ($scope, filmCollectionFactory, mainService, mainProvider, tmdbMovie, tmdbTV, tmdbGenre, genreFactory, $state) => {
                $scope.page = 1;
                $scope.currentCollections = filmCollectionFactory.getCollections();
                $scope.nameOfQuery = $state.params.query;
                tmdbMovie.setup('009a3e07367c027e7b6d8ef1ab8f8117', false);

                // get category list
                var genreList = ()=>{
                    return new Promise((resolve, reject) => {
                        tmdbGenre.movieList({language: 'ru', include_adult: true, sort_by: 'asc'},
                            (data)=>{
                                genreFactory.addGenres(data.genres)
                                resolve(data.genres)
                            },
                            (error)=>{
                                reject(error)
                            });
                    })
                }
                var search = (query)=> {
                    return new Promise((resolve, reject) => {
                        tmdbMovie.search(query, {language: 'ru', page: $scope.page},
                            (data)=> {
                                console.log('sucess')
                                console.log(data);
                                filmCollectionFactory.addCollections(data.results);
                                resolve(data.results);
                            },
                            (error)=> {
                                console.log('error')
                                console.log(error)
                                resolve(error);
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
                        search($scope.nameOfQuery, $scope.page).then(()=>{
                            this.busy = false;
                            $scope.page++;
                        });

                    }else{
                        this.busy = false;
                    }
                }


                genreList()
                    .then(filmCollectionFactory.removeCollection())
                    .then(search($scope.nameOfQuery));
            }
        ]
    )