angular.module('MagicCards',['ngRoute'])
.controller('GatherCards',GatherCardsController)
.controller('GatherCards2',GatherCards2Controller) .controller('addCard', addCardCtrl)
.factory('CardFactory',MagicFactory);

GatherCardsController.$inject = ["CardFactory"];
GatherCards2Controller.$inject = ["CardFactory"];
addCardCtrl.$inject=["CardFactory"];


function GatherCardsController (CardFactory){
    console.log('doyouworkdoe?');
    var Gcards = this;
Gcards.cards = CardFactory.CardList;
}


   

function addCardCtrl () {
    var aCtrl = this;
    console.log("add card control is working");
    aCtrl.greeting = "";
    
}

function GatherCards2Controller (CardFactory){
    var Gcards2 = this;
    Gcards2.cards = CardFactory.CardList;
        console.log(CardFactory.CardList);
}



function MagicFactory (){
    
              
var CardList = [
    { name: 'Brooklyn',
     manaColor: 'Concrete',
     power: 10,
     toughness: 5,
     art: 'http://assets.nydailynews.com/polopoly_fs/1.2688646.1466949184!/img/httpImage/image.jpg_gen/derivatives/article_750/man-shot-killed-brooklyn.jpg',

   },

    { name: 'San Fransico',
     manaColor: 'Rainbow',
     power: 0,
     toughness: 10,
     art: 'https://media.timeout.com/images/101718553/image.jpg',
    
},

{ name: 'Miami',
     manaColor: 'Mango',
     power: 5,
     toughness: 3,
     art: 'http://www.thefamouspeople.com/profiles/images/pitbull-7.jpg',
},
];


return {

CardList : CardList,
}
};