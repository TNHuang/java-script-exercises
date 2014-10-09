var Cat = function (name, owner) {
  this.name = name;
  this.owner = owner;

};

var gg = new Cat("Catract", "meeii");
var bb = new Cat("Catbert", "xxxx");

Cat.prototype.cuteStatement = function (){
  console.log( this.owner + " loves " + this.name);
};

gg.cuteStatement();

Cat.prototype.cuteStatement = function () {
  console.log( "Everyone loves " + this.name+ "!");
}

gg.cuteStatement();

Cat.prototype.meow = function (){
  console.log("meow");
};

gg.meow();

bb.meow = function () {
  console.log(this.name +"says meow");
};

bb.meow();
gg.meow();