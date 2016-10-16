/**
 * Created by semianchuk on 16.10.16.
 */
angular.module('angularApp')
    .factory('filmCollectionFactory', ['genreFactory', function (genreFactory) {

        var collection = [];

        function addCollections(newCollection) {
            return collection.push(...newCollection);
        }

        function getCollections() {
            return collection;
        }

        function removeCollection() {
            return collection=[];
        }

        return {
            addCollections: addCollections,
            getCollections: getCollections,
            removeCollection: removeCollection
        };
    }]);