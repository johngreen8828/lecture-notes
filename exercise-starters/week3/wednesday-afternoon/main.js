angular.module("tokyo", [])
    .controller('abyss', AbyssController) 
function AbyssController() {
        aCtrl = this;
            console.info("Hello there is working.")

            aCtrl.newMonster = {};
            aCtrl.monsters = [];
            window.aCtrl = aCtrl;

            aCtrl.addMonster = function(){
                aCtrl.monsters.push(aCtrl.newMonster);
                aCtrl.newMonster ={};

            }

 
        }
    
