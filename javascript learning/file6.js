class animal{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }
eat(){
    return `${this.name}is eating`
}
iscute(){
    return this.age<=1

}
}
const animal1= new animal('dog',1)
console.log(animal1)
console.log(animal1.eat())
console.log(animal1.iscute())