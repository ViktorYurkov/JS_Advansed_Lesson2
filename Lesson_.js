class Task {
    constructor(data) {
        this.name = data.name;
        this.user = data.user;
        this.isCompleted = false;
    }
    complete() {
        cinsole.log(`comp task ${this.name}`)
        this.isCompleted = true;
    };

    save() {
        console.log(`Записані ${this.name}`)
    };
};

class ObserverList {
    constructor() {
        this.observerList = [];
    };
    add(obj) {
        //console.log(`111 ${obj}`)
        return this.observerList.push(obj);
    }
    get(index) {
        if (index > -1 && this.observerList.length) {
            return this.observerList[index];
        }
    }

    removeAt(index) {
        this.observerList.splice(index, 1);
    }
    findIndex(obj, startInd) { //пошук обекта
        let i = startInd;
        //console.log(obj);
        while (i < this.observerList.length) {
            if (this.observerList[1] === obj) {
                return i;
            };
            i++;
        }
        return -1;
    }
    getCount() {
        return this.observerList.length;
    }
}

class ObsHuman extends Task { //наглядати. розширяти ыснуючый
    constructor(data) {
        super(data); // виклик конструктора
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        //console.log(`2222 ${observer}`)
        this.observers.add(observer);
    }

    removeObserv(observer) {
       //console.log(this.observers.findIndex(observer, 0)); 
        this.observers.removeAt(this.observers.findIndex(observer, 0));
    }

    notify(context) {
        let observerCount = this.observers.getCount();
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i)(context);
        }
    }
    save() {
        this.notify(this);
        super.save();
    }
}

class ObsAnimal extends Task { //наглядати. розширяти ыснуючый
    constructor(data) {
        super(data); // виклик конструктора
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        //console.log(`2222 ${observer}`)
        this.observers.add(observer);
    }

    removeObserv(observer) {
       //console.log(); 
    this.observers.removeAt(this.observers.findIndex(observer, 0));
    }

    notify(context) {
        let observerCount = this.observers.getCount();
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i)(context);
        }
    }
    save() {
        this.notify(this);
        super.save();
    }
}

const librarian_ = (function () {
    const mes = "librarian";

    function update(task) {
        const librarian1 = new Librarian('Віка');
        librarian1.recordVisitors('Катя');
    }
    return {
        update: update
    }
})();


const nurse_ = (function () {
    const mes = "nurse";

    function update(task) {
        const nurse = new Nurse('Анна');
        nurse.treats('Васю');
    }
    return {
        update: update
    }
})();

const hunter_ = (function () {
    const mes = "hunter";

    function update(task) {
        const hunter2 = new Hunter('Назар', 180, 88, 'влучно стріляє');
        hunter2.caught('горилу');
    }
    return {
        update: update
    }
})();

const worker_ = (function () {
    const mes = "worker";

    function update(task) {
        const worker1 = new Worker('Руслан');
        var hour= Math.random(0, 24);
        worker1.feeds('кота', 9);
        worker1.cleans('лева', 9);
    }
    return {
        update: update
    }
})();

const herbivorous_ = (function () {
    const mes = "herbivorous";

    function update(task) {
        const herbivorous1 = new Herbivorous('Корова');
        herbivorous1.stomach();
        //console.log(herbivorous1);
    }
    return {
        update: update
    }
})();

const predator_ = (function () {
    const mes = "predator";

    function update(task) {
        const predator1 = new Predator('Лев');
        predator1.hunting();
        //console.log(predator1);
    }
    return {
        update: update
    }
})();
console.log('--------------- Task ---------------');
const task1 = new ObsAnimal({
    name: 'Задачі',
});
task1.addObserver(herbivorous_.update);
task1.addObserver(predator_.update);
task1.save();
//console.log(task1.observers);

const task = new ObsHuman({
    name: 'Задачі',
});
task.addObserver(worker_.update);
task.addObserver(librarian_.update);
task.addObserver(nurse_.update);
task.addObserver(hunter_.update);

//console.log(task.observers);
task.save();

task.removeObserv(nurse_.update); //відписалися від події
task.save();
