/**
 * Created by semianchuk on 16.10.16.
 */
angular.module('angularApp')
    .factory('genreFactory', [ function () {

        var genre = [];

        function addGenres(newgenre) {
            return genre.push(...newgenre);
        }

        function getGenres() {
            return genre;
        }

        function removeGenre() {
            return genre=[];
        }

        return {
            addGenres: addGenres,
            getGenres: getGenres,
            removeGenre: removeGenre,
        };
    }]);