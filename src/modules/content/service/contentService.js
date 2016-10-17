/**
 * Created by semianchuk on 17.10.16.
 */
angular.module('content')
    .service('contentServices', ['tmdbMovie', function(tmdbMovie){
        this.getDetatails = (id)=>{
            return new Promise((resolve, reject) => {
                    tmdbMovie.details(id,{language: 'ru', include_adult: true, sort_by: 'asc'},
                        (data)=> {
                            resolve(data);
                        },
                        (error)=> {
                            reject(error);
                        })
                }
            )
        }
        this.getImages = (id)=>{
            return new Promise((resolve, reject) => {
                    tmdbMovie.images(id,{language: 'ru', include_adult: true, sort_by: 'asc'},
                        (data)=> {
                            resolve(data);
                        },
                        (error)=> {
                            reject(error);
                        })
                }
            )
        }
        this.getVideos = (id)=>{
            return new Promise((resolve, reject) => {
                    tmdbMovie.videos(id,{language: 'ru', include_adult: true, sort_by: 'asc'},
                        (data)=> {
                            resolve(data);
                        },
                        (error)=> {
                            reject(error);
                        })
                }
            )
        }
        this.getRecommendations = (id)=>{
            return new Promise((resolve, reject) => {
                    tmdbMovie.recommendations(id,{language: 'ru', include_adult: true, sort_by: 'asc'},
                        (data)=> {
                            resolve(data);
                        },
                        (error)=> {
                            reject(error);
                        })
                }
            )
        }
    }]);