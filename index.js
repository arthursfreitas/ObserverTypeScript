var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.subcribe = function (observer) {
        this.observers.push(observer);
    };
    Subject.prototype.unsubcribe = function (observer) {
        this.observers = this.observers.filter(function (element) { return observer.id === element.id; });
    };
    Subject.prototype.notify = function () {
        this.observers.forEach(function (observer) { return observer.update(); });
    };
    return Subject;
}());
var Observer = /** @class */ (function () {
    function Observer(id) {
        this.id = id;
    }
    Observer.prototype.update = function () {
        console.log("Observer " + this.id + " is updating...");
    };
    return Observer;
}());
var firstObserver = new Observer(1);
var secondObserver = new Observer(2);
var subject = new Subject();
subject.subcribe(firstObserver);
subject.notify();
console.log("--------");
subject.subcribe(secondObserver);
subject.notify();
console.log("--------");
subject.unsubcribe(secondObserver);
subject.notify();
