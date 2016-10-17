angular.module('angularApp', ['ui.router','navbar', 'search', 'tmdb', 'broadcast', 'main','infinite-scroll', 'content'])
    .run((tmdbMovie)=>{
        // setup for API
        tmdbMovie.setup('009a3e07367c027e7b6d8ef1ab8f8117', false);
    })
    .constant('domain', {
        'image': 'https://image.tmdb.org/t/p/w500/'
    })
    .filter('convertgenre', ['genreFactory', function (genreFactory) {
        var genre = genreFactory.getGenres();
        return (input) => {
            input = input || [];
            var output = [];
                for(var i=0;i<input.length;i++){
                    for(var y=0;y<genre.length;y++){
                        if(input[i]==genre[i].id){
                            output.push(genre[i].name)
                            break;
                        }
                    }
                }
            return output.join(', ');
        };
    }])