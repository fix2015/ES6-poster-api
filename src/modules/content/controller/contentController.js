/**
 * Created by semianchuk on 17.10.16.
 */
angular.module('content')
    .controller('contentController',
        ['$scope', '$state', 'contentServices', 'contentFactory',
            function($scope, $state, contentServices, contentFactory){
                var id = $state.params.id;
                contentFactory.removeDetails()
                    .then(()=>{
                        contentServices.getDetatails(id)
                            .then((data)=>{
                                console.log('first step')
                                console.log(data)
                                contentFactory.addDetails(data);
                            })
                    })

                    .then(()=>{
                        contentServices.getImages(id)
                            .then((data)=>{
                                console.log('second step')
                                console.log(data)
                                contentFactory.addDetails(data)
                            })
                    })

                    .then(()=>{
                        contentServices.getVideos(id)
                            .then((data)=>{
                                console.log('third step')
                                console.log(data)
                                contentFactory.addDetails(data)
                            })
                    })

                    .then(()=>{
                        contentServices.getRecommendations(id)
                            .then((data)=>{
                                console.log('fourth step')
                                console.log(data)
                                let recommendations = {
                                    recommendations: data.results
                                }
                                contentFactory.addDetails(recommendations)
                            })
                    })

            }
        ]
    );