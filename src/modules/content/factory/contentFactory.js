/**
 * Created by semianchuk on 17.10.16.
 */
angular.module('content')
    .factory('contentFactory', ['tmdbMovie', function(tmdbMovie){

        var details = {};

        function getDetails(){
            return details;
        }

        function addDetails(data){
            let tempdetails = Object.assign(details, data);
            details = Object.assign({}, tempdetails)
            return Object.assign({}, tempdetails);
        }

        function removeDetails(id){
            return new Promise((resolve, reject)=>{
                details = {};
                resolve(details);
            });
        }

        return{
            details: details,
            getDetails: getDetails,
            addDetails: addDetails,
            removeDetails: removeDetails,
        }
    }]);