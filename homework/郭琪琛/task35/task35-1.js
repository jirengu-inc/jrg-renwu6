// 创建一个 Car 对象，拥有属性name、color、status；拥有方法run，stop，getStatus (难度: ****)

function Car(name,color,status) {
    this.name = name
    this.color = color
    this.staus = status
}
Car.prototype.run = function(){
    this.status = 'run'
}
Car.prototype.stop = function(){
    this.status = 'stop'
}
Car.prototype.getStatus = function(){
    return this.status
}
var car1 = new Car('BMW', 'red', 'stop')



