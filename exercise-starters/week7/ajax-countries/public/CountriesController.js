angular.module('countryApp', []) 

.controller('countryController', country);
country.$inject=['$http'];

function country($http){
    console.log('country controller is working.')
    var vm = this;
    $http.get('/countries').then(function(res){
        vm.countryList = res.data;
    }, function(err){

    })
    vm.SearchCountry = function(){
        $http.post('/search', {name: vm.Search}).then(function(res){
            vm.country = res.data;
        })  
    }

}