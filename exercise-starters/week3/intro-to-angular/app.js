angular.module('app', [])
    /**********Main Controller is injected into the body element to give 
     * scope and functionality to the body element.
     */
    .controller('mainCtrl', function () {
        var v = this;
        v.helloWorld = function () {
            console.log("Hello there is working.")

        };

        v.changeColor = function (pink) {
            if (pink === true) {
                v.textColor = "color: pink";
            } else if (pink === false) {
                v.textColor = "color: black";
            } 
        };
        v.addXPoint = function () {
            v.xPoint = "!";
        };

        v.goToLink = function ($event) {
            // var v = this;  
            var goTo = confirm('Are you sure you would like to go to this site?');
            if (goTo) {
                v.link = "https://www.google.com";
                console.log(v.link);
            } else {
                $event.preventDefault();
            }

        };

        v.goToLink2 = function () {
            // var v = this;  
            var goTo = confirm('Are you sure you would like to go to this site?');
            console.log(goTo);
            if (goTo) {
                console.log(goTo);
                v.link = "https://www.google.com";
            } else {
                v.hideLink = true;
                console.log(v.hideLink);
            }

        };

        v.showPopUp = function () {
            v.showHide = true;
        }
        v.closePopUp = function () {
            v.showHide = false;
        }

        v.parStyles = {
            "padding-top": "0px"
        }
        v.buttonStyles = {
            "box-sizing": "border-box",
            "color": "black",
            "background-color": "red",
            "height": "70px",
            "width": "150px",
            "text-align": "center",
            "margin-top": "40px",
            "position": "relative"
        }
        v.popUpStyles = {
            "box-sizing": "border-box",
            "color": "white",
            "background-color": "#c0392b",
            "height": "200px",
            "width": "325px",
            "text-align": "center",
            "margin-top": "40px",
            "position": "fixed",
            "top": "300px",
            "left": "200px" 
        }
        v.h2Styles = {
            "position": "fixed",
            "top": "485px",
            "left": "450px",
            "color": "black"
        }
    });