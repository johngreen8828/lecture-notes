angular.module('MagicCards')
// angular.module('ngRoute', []).directive
    .config(Router);

Router.$inject = ['$routeProvider'];
// $routeProvider comes from the ngRoute module
function Router ($routeProvider){

    // If a user tries to go to a page that doesn't exist, take them back to the home page
  //  $routeProvider
    //    .otherwise({
      //      redirectTo : '/'
  //      });


    $routeProvider
        
        .when('/add-card', {
            templateUrl : '/add-card.html',
            controller: "addCard as aCtrl",
            //controller  : 'CoffeeOrigins as oCtrl' // Exactly the same syntax as our ng-controller directive
            // this controller property essentially places and ng-controller directive on ng-view
        })

}




