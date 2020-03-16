class Animal {
    constructor(name, wool, crawl) {
        this.name = name;
        this.wool = wool; //величина шерсті
        this.crawl = crawl //повзати
        this.hungry = false;
    }
    toMove(as) { //рухатись
        if (as == 1) {
            this.voice = 'повільно';
        } else if (as == 2) {
            this.voice = 'нормально';
        } else if (as == 3) {
            this.voice = 'швидко';
        }
        console.log(`${this.name} рухається  ${this.voice}`);
    }
    eat() { //їсти
        if (Math.random(0, 100) < 50) {
            this.hungry = true;
            console.log(`${this.name} хоче їсти`);

        } else {
            this.hungry = false;
            console.log(`${this.name} не хоче їсти`);
        }
        return this.hungry;

    }
};
console.log('--------------- Task Animal ---------------');
const animal = new Animal('Лев', 'довга', false);
console.log(`У ${animal.name} шерсть ${animal.wool}`);
animal.toMove(3);
animal.eat();

class Herbivorous extends Animal {
    constructor(name, wool, crawl, description) {
        super(name, wool, crawl);
        this.description = description;
        this.ate = Math.random(0, 100);
    }
    stomach() { //
        //console.log(this.ate);
        //console.log(this.hungry);
        if (this.ate < 100 & !this.hungry) {
            this.ate += Math.random(0, 30);
            console.log(`${this.name} трохи полиїла `);
        } else {
            this.hungry = true;
            console.log(`${this.name} ситa `);
        }

    }
};
const herbivorous = new Herbivorous('Корова', 'коротка', false, 'дає молоко');
console.log(`У ${herbivorous.name} шерсть ${herbivorous.wool}. І ${herbivorous.description}`);
herbivorous.stomach();
herbivorous.toMove(1);

class Predator extends Animal {
    constructor(name, wool, crawl, description) {
        super(name, wool, crawl);
        this.description = description;
        this.hungry = false;
    }
    hunting() { //полювання
        //console.log(this.hungry)
        if (this.hungry) {
            this.hunting = true;
            console.log(`${this.name} голодний і хоче полювати`);
        } else {
            this.hunting = false;
            console.log(`${this.name} не хоче полювати`);
        };

    }
};
const predator = new Predator('Кобра', 'відсутня', true, 'полює на інших кобр');
console.log(`У ${predator.name} шерсть ${predator.wool}. І ${predator.description}`);
predator.hunting();
predator.toMove(2);
