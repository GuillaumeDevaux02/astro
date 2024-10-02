"use strict";
import { boolean } from "astro:schema";

 






let characterName: string ="John";
let CharacterScore: number =84165;

let highScore: BigInt =150n;
let maxAmmo: BigInt =BigInt(565456);

let treasureChestOpen: boolean = true;
treasureChestOpen = false;

let playerOne = null;
let PlayerTwo = undefined;

let playerCar = {
    "Name": "car",
    "Color": "blue",
    "Wheels": 4
}


// UNKNOWN & ANY

let playerWeapon: any;
let playerItem: unknown;

let test: void;

// readonly
// optional (?)

interface Vehicule {
    name: string;
    wheels: number;
    score: BigInt;
    // readonly
    readonly power: number;
    // optional
    brand?: string; // "Volkswagen"
}

const newVehicule: Vehicule = {
    name: "test",
    wheels: 4,
    score: 4654n,
    power: 3,

    brand: "Audi"
}

// Arrays

let playerList: string[] = ["player 1 ", " player 2"];
let weaponList: string[] = [];

// Tuples

let masterPlayer : [string, number, BigInt] = ["Joe",651,554n];

let playerVehicules: [string, number] [];
playerVehicules = [["car",150], ["motorbike",161], ["motorbike",161], ["motorbike",161]];

playerVehicules[1][1]

// BigInt
let Highscore: BigInt = 30985034n;
let playerScore: BigInt = BigInt(6546545);

let playerAlive: boolean = true; // true | false
let playerLife: number = 54 + 5446515.546;
let playerAmmo: null = null;

// Enum
enum Monsters {
    DEVIL = 0,
    ORC = 180,
    OGRE = "This is a monster",
}

console.log(Monsters.OGRE)

// CUSTOM TYPES

type Truck =
{
    id:number,
    name: string,
    color: string[],
    wheels: number,
    isAvailable: boolean,
    price: BigInt
}

const newTruck: Truck = {

    id:154,
    name: "truck name",
    color:  ["blue","red"],
    wheels: 8,
    isAvailable: true,
    price: 19548941648n
}

console.log(typeof(newTruck));

// INTERFACE

interface Ivehicule {
    name: string;
    readonly colors: string[];
    wheels?: number;
}

interface ICar extends Ivehicule {
    name: string;
    readonly colors: string[];
    wheels?: number;
}

const myCar: ICar = {
    type: "Car" ,
    power: 3043,
    name: "My Car",
    color: ["color",""],
    wheels: 4
}

// CLASSES

class Animal{
    // instance Properties
    public type: string;
    protected color: string;

    // Static Properties
    public static animalInstances: number = 0;
    public static animalTypes: string[] = ["Cat","Dog","Dinosaur"]

    // Constructor
    public constructor (type: string, color: string) {
        this.type = type;
        this.color = color;
    }

}

class Dog extends Animal {
    public constructor (type: string, name: string, color: string){
        super(type, name, color);
    
    }
}

const Hubert = new Animal("Dog", "Hubert", "Beige");
console.log(Hubert.type);
Hubert.name = "Super Dog";