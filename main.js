// •	Створити клас Human із своїми властивостями та методами, які можуть бути у людини
// (вміння говорити, ходити, вага, колір шкіри і т.д.).
// •	Від цього класу повинні наслідуватись
// 2 інших класи, клас Man, клас Woman.
// •	Далі розширюєм функціонал – для Woman дати ще 2 класи наслідники
// Librarian і Nurse та прописати методи та властивості які притаманні таким професіям.
// •	Для Man – дати також 2 класи Hunter і Worker та прописати методи та властивості
// які притаманні таким професіям.



function Human(weight, skinColor, height){
    this.weight = weight;
    this.skinColor = skinColor;
    this.height = height;
}


Human.prototype.talk = function (){
    console.log(`I can talk`)
}

Human.prototype.walk = function (){
    console.log(`I can walk`)
}

Human.prototype.talk = function (){
    console.log(`I can talk`)
}

Human.prototype.sleep = function (){
    console.log(`I can sleep`)
}
Human.prototype.eat = function (){
    console.log(`I can eat`)
}

let hmn = new Human('55', 'white', 185);
console.log(hmn)
hmn.walk()
hmn.talk()
hmn.sleep();

Man.prototype = Object.create(Human.prototype);

function Man(weight, skinColor, height){
    Human.call(this, weight, height, skinColor);
}

let man = new Man('65', 'black', 190)

console.log(man);
man.walk();
man.sleep()

Woman.prototype = Object.create(Human.prototype);

function Woman(weight, skinColor, height){
    Human.call(this, weight, height, skinColor);
}

let woman = new Woman('45', 'yellow', 155);

console.log(woman);
woman.talk();
woman.eat();

Librarian.prototype = Object.create(Woman.prototype)

function Librarian(weight, skinColor, height){
    Woman.call(this, weight, skinColor, height);
};

Librarian.prototype.read = function (book){
    this.book = book
    console.log(`I can read ${this.book}`)
}

Librarian.prototype.findBook = function (book){
    this.book = book
    console.log(`I can find ${this.book}`)
}

let librarian = new Librarian('80', 'black', 175);

console.log(librarian);
librarian.read('Bukwar');
librarian.findBook('Bukwar');

function Nurse(weight, skinColor, height){
    Woman.call(this, weight, skinColor, height);
}

Nurse.prototype = Object.create(Woman.prototype);

Nurse.prototype.injection = function (){
    console.log(`I can make injection`)
};

Nurse.prototype.help = function (){
    console.log(`i can make help`)
};

let nurse = new Nurse(60, 'dark', 140);
console.log(nurse);
nurse.help();
nurse.injection()

function Hunter(weight, skinColor, height){
    Man.call(this, weight, skinColor, height)
};

Hunter.prototype = Object.create(Man.prototype);

Hunter.prototype.shoot = function (){
    console.log(`I can shoot`)
}

Hunter.prototype.cookMeat = function (){
    console.log(`I can cook meat`)
}

let hunter = new Hunter(90, 'white', 190)

console.log(hunter);
hunter.shoot();
hunter.talk();
hunter.cookMeat()

function Worker(weight, skinColor, height){
    Man.call(this, weight, skinColor, height)
};

Worker.prototype = Object.create(Man.prototype);

Worker.prototype.hardWork = function (){
    console.log(`I can work intensive`)
}

Worker.prototype.coldWork = function (){
    console.log(`I can work in the cold`)
}

let worker = new Worker(80, 'black', 185);
console.log(worker)
worker.hardWork();
worker.coldWork();
worker.sleep();



// Завдання 2.
//
// Створити клас Animal зі своїми властивостями та методами які можуть бути
// у всіх тварин (ходити, бігати, мати шерсть і т.д.)
// Від цього класу повинні наслідуватись 2 класи Herbivorous і Predator.
// Далі розширюєм функціонал – для Herbivorous створити вид 2 тварин,
// а також для Predator.
//

function Animal(wool, sharpTeeth, wild){
    this.wool = wool;
    this.sharpTeeth = sharpTeeth;
    this.wild = wild;
}

Animal.prototype.run = function (){
    console.log(`Can run`)
}

Animal.prototype.eat = function (){
    console.log(`Can eat`)
}

Animal.prototype.sleep = function (){
    console.log(`Can sleep`)
}

Animal.prototype.hunt = function (){
    console.log(`Can hunt`)
}

let animal = new Animal('true', 'true', 'false');

console.log(animal);

animal.eat();
animal.run();
animal.hunt();

function Herbivorous(wool, sharpTeeth, wild){
    Animal.call(this, wool, sharpTeeth, wild);
};

Herbivorous.prototype = Object.create(Animal.prototype);


function Rabbit(wool, sharpTeeth, wild){
    Herbivorous.call(this, wool, sharpTeeth, wild)
}

Rabbit.prototype = Object.create(Herbivorous.prototype);

Rabbit.prototype.eatCarrot = function (){
    console.log(`Eat carrot`)
}

Rabbit.prototype.longEars = function (){
    console.log(`Has long ears`)
}

let rabbit = new Rabbit('true', 'true', 'false');

console.log(rabbit);

function Cow(wool, sharpTeeth, wild){
    Herbivorous.call(this, wool, sharpTeeth, wild)
}

Cow.prototype = Object.create(Herbivorous.prototype);

Cow.prototype.giveMilk = function (){
    console.log(`Gives milk`)
}

Cow.prototype.graze = function (){
    console.log(`Graze all day`)
}

let cow = new Cow('true', 'false', 'false');
console.log(cow);
console.log();

cow.giveMilk();
cow.graze();



function Predator(wool, sharpTeeth, wild){
    Animal.call(this, wool, sharpTeeth, wild)
};

Predator.prototype = Object.create(Animal.prototype);

function Wolf(wool, sharpTeeth, wild){
    Predator.call(this, wool, sharpTeeth, wild)
};

function Fox(wool, sharpTeeth, wild){
    Predator.call(this, wool, sharpTeeth, wild)
};


Wolf.prototype = Object.create(Predator.prototype);
Fox.prototype = Object.create(Predator.prototype);

let wolf = new Wolf('true', 'true', 'true');
let fox = new Fox('true', 'true', 'true');

console.log(wolf)
console.log(fox)
