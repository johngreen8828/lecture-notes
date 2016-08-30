angular.module('App', []) // speaking in code: declare an angular module called SilverRush with no dependencies
    .controller('AppControl', AppController)
function AppController() {
    aCtrl = this;
    console.log("controller is working");

};
function menuItems(name, calories, vegan, glutenFree, citrusFree) {
    this.name = name;
    this.calories = calories;
    this.vegan = vegan;
    this.glutenFree = glutenFree;
    this.citrusFree = citrusFree;

    this.stringify = function (name, calories, vegan, glutenFree, citrusFree) {
        if (this.vegan) {
            var veganString = "vegan friendly";
        } else {
            var veganString = "not vegan friendly";
        }
        if (this.glutenFree) {
            var glutenString = "gluten friendly";
        } else {
            var glutenString = "not gluten friendly"
        }
        if (this.citrusFree) {
            var citrusString = "citrus friendly";
        } else {
            var citrusString = "not citrus friendly"
        }

        console.log("This " + this.name + " food item has " + this.calories + " calories and is " + veganString +
            " and " + glutenString + " and " + citrusString);
    }
};
/*
var burger = new menuItems ("burger" , 340, false, false, true);
burger.stringify();
var pizzaSlice = new menuItems ("cheese", 129, true, false, false);
pizzaSlice.stringify();
var juicer = new menuItems ("lemons, 98, true, true, false");
juicer.stringify();
*/

var margDrinkIngredients = ["Tequilla", "lime Juice", "cointreau", "Triple Sec", "Salt"];

var TnTDrinkIngredients = ["tanqueray", "Tonic", "Lime"];

var beerDrinkIngredients = ["beer"];

var burittoIngredients = ["beans", "meat", "chicken", "lettuce", "tortilla",
    "tomatos", "cheese", "green chili", "hot sauce"];

var enchiladaIngredients = ["seasoned meat", "enchilada sauce", "lettuce", "onions"];

var tacoIngredients = ["seasoned meat", "lettuce", "tomatos", "taco sauce"];

var plates = ["burrito", "enchilada", "taco"];

var menuList = [plates + " beer " + " TnT " + " margharita"];

function drink(name, description, price, drinkIngredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.drinkIngredients = drinkIngredients;


    this.stringify = function (name, description, price, drinkIngredients) {
        var tmpDrinkIngredients = [];
        if (this.name == "margharita") {
            var tmpDrinkIngredients = margDrinkIngredients;
        } else if (this.name == "TnT") {
            var tmpDrinkIngredients = TnTDrinkIngredients;
        } else {
            var tmpDrinkIngredients = "Beer";
        }
        var drinkString = "This drink item: " + "Drink Name: " + this.name +
            " Drink Description:  " + this.description + " Price:  " + this.price + "  Drink Ingredients:  " +
            tmpDrinkIngredients;
        var tmpDrink = document.getElementById("drink");
        tmpDrink.innerHTML = drinkString;
    }
};
function foodItems(name, description, price, foodIngredients) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.foodIngredients = foodIngredients;

    this.stringify = function (name, description, price, foodIngredients) {
        var tmpFoodIngredients = [];
        if (this.name == "burrito") {
            var tmpFoodIngredients = burittoIngredients;
        } else if (this.name == "enchilada") {
            var tmpFoodIngredients = enchiladaIngredients;
        } else {
            var tmpFoodIngredients = tacoIngredients;
        }
        var foodString = "This Food items: " + "Item Name: " + this.name +
            " Item Description: " + this.description + " Price:  " + this.price + " Item Ingredients: " +
            tmpFoodIngredients;
        var tmpFood = document.getElementById("foodItem");
        tmpFood.innerHTML = foodString;
    }
};


function restaurant(name, description, menu) {
    this.name = name;
    this.description = description;
    this.menu = menu;

    this.stringify = function (name, description, menu) {
        var restaurantString = "This " + this.name + "has " + this.description + " and has these menu items " + this.menu;
        var tmpFood = document.getElementById("restaurant");
        tmpFood.innerHTML = restaurantString;
    }
};
function customer(dietPreference) {
    this.dietPreference = dietPreference;
};
function menuItems(menu) {
    this.menu = menu;

    this.stringify = function (menu) {
        var tmpMenu = document.getElementById("menu");
        tmpMenu.innerHTML = "Here is the menu listing: " + this.menu;
    }
};

var listDrinks = new drink("margharita", "alcholic beverege", "$5.25", "margDrinkIngredients");
listDrinks.stringify();

var listFood = new foodItems("burrito", "ingredients wrapped in a flour tortilla", "$7.25", "burritoIngredients");
listFood.stringify();

var listRestaurant = new restaurant("Mickeys Mexican", "Mexican Food", menuList);
listRestaurant.stringify();

var listMenu = new menuItems(menuList);
listMenu.stringify();



//var juicer = new menuItems ("lemons, 98, true, true, false");
//juicer.stringify();

/*Define constructors for the following objects. Add parameters to the constructor for the 
given properties and add them as instance variables.
Drink
string name
string description
number price
Array of FoodItem ingredients
Plate
string name
string description
number price
Array of FoodItem ingredients
Order
Array of Plate plates
Menu
Array of Plate plates
Restaurant
string name
string description
Menu menu
Customer
string dietaryPreference
Define a stringify method on each constructor's prototype. This method should return a string 
representation of the object, formatted as you choose. stringify should not have any side 
effects. You may want to reuse the stringify method of the contained objects. 
(e.g. the Menu object should call stringify on each of its plates to reuse that functionality 
instead of having to duplicate the code for each plate).
Add the following methods to the Plate object to determine if all the food items within it 
fit a specific dietary restriction.
boolean isVegan
boolean isGlutenFree
boolean isCitrusFree
Instantiate a Burrito Plate, a Guacamole Plate, and a Margarita Drink.
Instantiate a Menu that contains each of the instantiated Plates and Drinks.
Instantiate a Restaurant that contains the instantiated Menu.
Call the Restaurant's stringify method to have it print out all its information.
*/


