
let a = 1;

// use let when is volatile, const when is constant

const hello: string = "world";
// We need always to transpile our typescript in javascript
// in command line write "tsc main.ts"

// Basic Function
const getFullName = (name: string , surname: string): string =>  {
    return name + " " + surname;
};

console.log(getFullName("Panos", "Kontos"));

// create objects
// Abstract Object user
interface IUser {
    name: string;
    // ? = not mandatory
    age?: number;
    getMessage(): string;
};

// use the interface to create objects easily
const user: IUser = {
    name: "Jack",
    age: 204,
    getMessage() {
        return "My name is " + user.name;
    },
};

const user2: IUser = {
    name: "Jotaro",
    getMessage() {
        return "My name is " + user2.name;
    },
};

console.log(user.name, user.age);
console.log(user.getMessage())

// Union operator
let username: string = "Nick";

// Data declaration will be string or number 
let pagName: string | number = "1";
pagName = 2;
pagName = "four";

let errorMessage: string | null=null;

// declare types for cleaner architecture
type ID = string;
type ArrayofEnemies = string;

interface HeroInterface {
    id: ID;
    name: string;
    supername?: string;
    age: number | string;
    human: boolean;
};

// You can also use union with interfaces
let hero: HeroInterface | null=null;

let enemies: ArrayofEnemies[] = ["hobbit","gandalf"];

// Void type
const doSomething = (): void => {
    console.log("Atttaaack");
};

doSomething();

// Any type
// The worst type AVOID IT!!!
let foo: any = "Go";
foo = 2;
foo = undefined;

// type convertion
let page: unknown = "1";
let pagenum = page as boolean;

// DOM Manipulation but declaring the HTML types
// all methods are available
// Declare HTML element as htmlInput...
const someElement = document.querySelector("box") as HTMLInputElement;

// Add event Listeners
// Since no events we comment
// someElement.addEventListener('blur', (event) => {
//     // declare our target correctly
//     const target = event.target as HTMLInputElement;

//     console.log('event', event.target);
// })



// Classes in Typescript
class User {
    firstname: string;
    private lastname: string;
    constructor(firstname: string, lastname:string){
        this.firstname = firstname
        this.lastname = lastname
    };
    
    getFullname(): string {
        return this.firstname + ' ' + this.lastname;
    }

}

const user1 = new User('Monster','Yoroichi');
console.log(user1.getFullname());
console.log(user1.firstname)
// console.log(user1.lastname)   !error because is private


// When to use Interface and when Class???
// Use interfaces and implement it with Classes

interface AnimeInterface {
    getEpisodes(): number;
}

// implements the AnimeInterface
class Anime implements AnimeInterface {
    episodes:number;
    constructor(episodes=12) {
        this.episodes = episodes;
    };
    // satic types are only accesible inside the class 
    // static readonly maxchars = 50;

    getEpisodes() {
        return this.episodes * 5;
    }
}

const a1 = new Anime(14);
console.log(a1.getEpisodes())


//EASY Inheritance from preavious clas
class Movie extends Anime {
}

const m1 = new Movie(1);
console.log(m1.getEpisodes())


// generic Interfaces and Function in typescript

// generic Function
const addId =<T>(obj: T) => {
    const id = Math.random().toString(14);
    return {
        ...obj, id
    };
};

// generic interface
interface KidInterface<T> {
    name:string;
    data:T;
}

// for every interface we can change the data
// string
const kid: KidInterface<{meta: string}> = {
    name:"Nikos",
    data: {
        meta: "foo",
    }
};
// string array
const kid2: KidInterface<{meta: string[]}> = {
    name: "Larry",
    data: {
        meta: ["kota","rizi"]
    }
}

const result = addId(kid2);
console.log(result);

// Enums

// normal code 
const statuses = {
    disabled: 0,
    running: 1,
    done: 2,
}
console.log(statuses.running)

// with enums
enum Status {
    disabled,
    inprogress,
    done,
}

console.log(Status.inprogress)

// We get the same result but we don't write values 
// Also we can use it as a data type 

