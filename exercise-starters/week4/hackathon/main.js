angular.module('Hacker', [])
    .controller('APIHack', HackController);
HackController.$inject = ['$http'];

function HackController($http) {
    var hCtrl = this;
    console.info("Hacking is our way.");

    hCtrl.getMarvel = function () {
        console.log("FU on its way");
        $http.get('http://www.foaas.com/keep/John/Three Beers')
            .then(function (response) {
                console.log("Response from API: ", response.data);
                hCtrl.charList = response.data;
            });
    }
    hCtrl.getMarvel1 = function () {
        console.log("FU on its way");
        $http.get('http://www.foaas.com/outside/Dylan/John')
            .then(function (response) {
                console.log("Response from API: ", response.data);
                hCtrl.charList = response.data;
           });
    }
    hCtrl.getMarvel2 = function () {
        console.log("FU on its way");
        $http.get('http://www.foaas.com/madison/Joshua/Rob')
            .then(function (response) {
                console.log("Response from API: ", response.data);
                hCtrl.charList = response.data;

           });    
    }
    hCtrl.getMarvel3 = function () {
        console.log("FU on its way");
        $http.get('http://www.foaas.com/thanks/Three Beers and a John')
            .then(function (response) {
                console.log("Response from API: ", response.data);
                hCtrl.charList = response.data;

           });    
    }
}