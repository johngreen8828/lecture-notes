angular.module('GoldRush', []) // speaking in code: declare an angular module called SilverRush with no dependencies
    .controller('GoldRushMarkers', function(){
        console.log('Gold Streak Markers loaded');
     // `this` represents SCOPE
        // SCOPE (`this`), in JavaScript, (within a function) is really nothing more than an object that reperesnts all of the properties that this function knows about
        var goldMarkers = this; // this variable does NOT have to match the `as` variable in your HTML, though it really helps if you keep them the same name

        // function() {
        //     this // is not equal to the `this` on like 9;
        // }

        goldMarkers.markers = [];

        // ng-click handler
        goldMarkers.addMarker = function($event) {
            console.log('Marker Event', $event);
            // var addGoldText = prompt("Please add location info.");
            // $event.preventDefault();
            goldMarkers.markers.push({
                styles:{
                left: $event.pageX +'px',
                top:  $event.pageY +'px',
                },
                description: prompt("Please add location info.")
            });
            
        };

        goldMarkers.removeMarker = function($event, $index) {
            // console.log('Marker', $event, $index);
            console.log("Marker", $index);
            goldMarkers.markers.splice($index,1); // desctructive, non-functional (REMEMBER... for interviews)
        };
    });
