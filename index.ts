interface ISubject {
  subcribe(observer: Observer): void
  unsubcribe(observer: Observer): void
  notify(): void
}

interface IObserver{
  update(): void
}

class Subject implements ISubject{
  private observers: Observer[] = []

  subcribe(observer: Observer): void {
    this.observers.push(observer)
  }
  unsubcribe(observer: Observer): void {
    this.observers = this.observers.filter(element => observer.id === element.id)
  }
  notify(): void {
    this.observers.forEach(observer => observer.update())
  }

}

class Observer implements IObserver{
  constructor(public readonly id: number){}
  update(){
    console.log(`Observer ${this.id} is updating...`)
  }
}

const firstObserver = new Observer(1)
const secondObserver = new Observer(2)

const subject = new Subject();

subject.subcribe(firstObserver);
subject.notify();
console.log("--------");
subject.subcribe(secondObserver);
subject.notify();
console.log("--------");
subject.unsubcribe(secondObserver);
subject.notify();