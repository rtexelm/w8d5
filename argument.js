function sum(...args){
  let sum=0;
  for(let i=0; i<= arguments.length-1; i++){
    sum+=arguments[i]}  
    return sum
}

a= sum(1,2,3)
console.log(a)


class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  

  Function.prototype.myBind = function(context) {
    let that= this //storing context from original fuction first
    const arg= Array.prototype.slice.call(arguments); //actual argument change to array
    const callArg= arg.slice(1);

    return function(){ 
        const arg2= Array.prototype.slice.call(arguments); //actual argument change to array
        const callArg2= arg2.slice(1);
        // const allArgs= callArg.concat(callArg2)
        return that.apply(context, [callArg, callArg2])(
            callArg2
        );
    };
};

  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
//   markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true
  
  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true
  
  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true