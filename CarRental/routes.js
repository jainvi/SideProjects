//Routes 
hotwireApp.config(function($routeProvider){
                  $routeProvider
                  .when('/',{
                  templateUrl:'pages/home.htm',
                  controller :'homeController'
                  })
                  .when('/search',{
                  templateUrl:'pages/seachresult.htm',
                  controller :'searchResultController'
                  }) 
                });
                 