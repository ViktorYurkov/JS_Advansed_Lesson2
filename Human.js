class Human {
    constructor(name, height, weight, skinColor) {
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.skinColor = skinColor;

    }
    talk(as) { //говорить
        if (as == 1) {
            this.voice = 'мало';
        } else if (as == 2) {
            this.voice = 'добре';
        } else if (as == 3) {
            this.voice = 'багато';
        } else this.voice = 'добре';
        console.log(`${this.name} говорить ${this.voice}`);
    }
    walk(as) { //ходить
        if (as == 1) {
            this.movement = 'повільно';
        } else if (as == 2) {
            this.movement = 'нормально';
        } else if (as == 3) {
            this.movement = 'швидко';
        }
        console.log(`${this.name} ходить ${this.movement}`);
    };
};
console.log('--------------- Task Human ---------------');
const human = new Human('Іван', 180, 70, 'світла');
human.walk(1);
human.talk(3);

class Man extends Human {
    constructor(name, height, weight, skinColor, description) {
        super(name, height, weight, skinColor);
        this.description = description; 
    }
    does(as) {
        this.does = as;
        console.log(`This ${this.name} робить   ${this.does}`);
    }
    save(){
        console.log(`Цей ${this.name} є ${this.description}`);
    }

};
const man = new Man('Петро', 180, 90, 'чорна', 'добре');
man.talk(2);
man.walk(3);
man.does('стіл');

class Woman extends Human {
    constructor(name, height, weight, skinColor, description) {
        super(name, height, weight, skinColor);
        this.description = description;
        
    }
    preparing(what) {
            this.preparing = what;
        console.log(`${this.name} готує ${this.preparing}`);
    }
    save(){
        console.log(`Ця ${this.name} є ${this.description}`);
    }
};
const woman = new Woman('Анна',165, 75, 'рожева', 'струнка');
woman.talk(3);
woman.walk(2);
woman.preparing('сніданок');
woman.save();

class Librarian extends Woman {
    constructor(name, description, readBooks) {
        super(name, description);
        this.description = description;
        this.readBooks = readBooks;   
    }
    recordVisitors(visitors) {
            this.visitors = visitors;
            this.date = new Date();
        console.log(`${this.date.toDateString()} - ${this.visitors} була в нас`);
    }
    save(){
        console.log(`Прочитала ${this.readBooks}`);
    }
};
const librarian = new Librarian('Алла', 'розмірна', 'Гамлет');
librarian.recordVisitors('Марія');
console.log( `${librarian.name} є ${librarian.description} ` );
librarian.save();

class Nurse extends Woman {
    constructor(name, description, experienYear) {
        super(name, description);
        this.description = description;
        this.experienYear = experienYear;
    }
    treats(whom) {
        console.log(`${this.name} лікує ${whom}`);
    };
};
const nurse = new Nurse('Анна', 'холоднокровна', 44);
nurse.treats('Вася');
console.log(`${nurse.name} є ${nurse.description}. Пропрацювала ${nurse.experienYear} роки`);

class Hunter extends Man {
    constructor(name, height, weight, description, accuracyOfShots) {
        super(name, height, weight, description);
        this.description = description;
        this.accuracyOfShots =accuracyOfShots;
    }
   caught(what) {// ловить
        this.caught = what;
        console.log(`${this.name} ловить ${this.caught}`);
    }
    save(){
        console.log(this.accuracyOfShots);
    }

};
const hunter = new Hunter('Назар',180,88,'бистру реакцію', 10);
hunter.talk(2);

class Worker extends Man {
    constructor(name, description) {
        super(name, description);
        this.description = description;
        
    }
    feeds(what, hour) { //кормть   
        if (hour >= 7 & hour < 9 || hour >= 12 & hour < 14 ){
            console.log(`${this.name} кормить ${what} `);
        }   
    }
    cleans(where, hour) {//прибирає
        if (hour >= 9 & hour < 12 || hour >= 14 & hour <= 17 ){
            console.log(`${this.name} прибирає u ${where} `);
        }
    }
};
const worker = new Worker('Руслан', 'відповідальний');
worker.feeds('Кіт');
worker.cleans('Лева');
console.log( `${worker.name} є ${worker.description} ` );