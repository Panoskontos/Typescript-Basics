var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = 1;
// use let when is volatile, const when is constant
var hello = "world";
// We need always to transpile our typescript in javascript
// in command line write "tsc main.ts"
// Basic Function
var getFullName = function (name, surname) {
    return name + " " + surname;
};
console.log(getFullName("Panos", "Kontos"));
;
// use the interface to create objects easily
var user = {
    name: "Jack",
    age: 204,
    getMessage: function () {
        return "My name is " + user.name;
    }
};
var user2 = {
    name: "Jotaro",
    getMessage: function () {
        return "My name is " + user2.name;
    }
};
console.log(user.name, user.age);
console.log(user.getMessage());
// Union operator
var username = "Nick";
// Data declaration will be string or number 
var pagName = "1";
pagName = 2;
pagName = "four";
var errorMessage = null;
;
// You can also use union with interfaces
var hero = null;
var enemies = ["hobbit", "gandalf"];
// Void type
var doSomething = function () {
    console.log("Atttaaack");
};
doSomething();
// Any type
// The worst type AVOID IT!!!
var foo = "Go";
foo = 2;
foo = undefined;
// type convertion
var page = "1";
var pagenum = page;
// DOM Manipulation but declaring the HTML types
// all methods are available
// Declare HTML element as htmlInput...
var someElement = document.querySelector("box");
// Add event Listeners
// Since no events we comment
// someElement.addEventListener('blur', (event) => {
//     // declare our target correctly
//     const target = event.target as HTMLInputElement;
//     console.log('event', event.target);
// })
// Classes in Typescript
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    ;
    User.prototype.getFullname = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return User;
}());
var user1 = new User('Monster', 'Yoroichi');
console.log(user1.getFullname());
console.log(user1.firstname);
// implements the AnimeInterface
var Anime = /** @class */ (function () {
    function Anime(episodes) {
        if (episodes === void 0) { episodes = 12; }
        this.episodes = episodes;
    }
    ;
    // satic types are only accesible inside the class 
    // static readonly maxchars = 50;
    Anime.prototype.getEpisodes = function () {
        return this.episodes * 5;
    };
    return Anime;
}());
var a1 = new Anime(14);
console.log(a1.getEpisodes());
//EASY Inheritance from preavious clas
var Movie = /** @class */ (function (_super) {
    __extends(Movie, _super);
    function Movie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Movie;
}(Anime));
var m1 = new Movie(1);
console.log(m1.getEpisodes());
