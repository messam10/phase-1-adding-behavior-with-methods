class Cat {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        this.speak = () => `${this.name} says meow!`;
    }
}

class Dog {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        this.speak = () => `${this.name} says woof!`;
    }
}

class Bird {
    constructor(name, gender) {
        this.name = name
        this.gender = gender
        this.speak = () => (this.gender === "male") ? `It's me! ${this.name}, the parrot!` : `${this.name} says squawk!`;
    }
}

cat = new Cat("Sasha", "female");
dog = new Dog("Rufio", "male");
bird = new Bird("Pablo", "male");
bird2 = new Bird("Mable", "female");