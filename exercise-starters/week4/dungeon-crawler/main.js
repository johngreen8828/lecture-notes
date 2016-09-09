class World {
    constructor(players, rooms, items, monsters) {
        this.players = players;
        this.rooms = rooms;
        this.items = items;
        this.monsters = monsters;
    };
};

class Player {
    constructor(inventory, health, strength, itemsConsumable, itemsNonConsumable) {
        this.inventory = inventory;
        this.health = health;
        this.strength = strength;
        this.itemsConsumable = itemsConsumable;
        this.itemsNonConsumable= itemsNonCosumable;
    };
    addInventory(itemsConsumable, itemsNonConsumable) {
        this.inventory = inventory + 1;
    };
    dropInventory(itemsConsumable, itemsNonConsumable) {
        this.inventory = inventory - 1;
    };
};

class Inventory {
    constructor (itemsConsumable, itemsNonConsumable) {
        this.itemsConsumable = itemsConsumable;
        this.itemsNonConsumable = itemsNonConsumable;
    };
    addPlayer() {

    };
};

class Room {
    constructor(monsters, items){
        this.monsters = monsters;
        this.items = items;
    };
    removeItem(items) {
        this.items = items - 1;
    };
};

class Monster {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
    };
};  