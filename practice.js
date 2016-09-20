//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      // by using the 'this keyword' you can use 'this' to represent an object.


  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      //1. whenever a function is contained within a global scope.
      //2. whenever a function is called by a preceding dot.
      //3. whenever a costructor function is being used.
      //4. whenever a call or apply method is being used.
  // 3) What is the difference between call and apply?

      //Answer
      // there really is none but you can use [] in apply.
  // 4) What does .bind do?

      //Answer
      //the .bind method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.



//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
    var user = {
      username: "me",
      email: "n@n.com",
      getUsername: function(){
        return this.username;
      }
    }
    //console.log(getUsername);
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.


//Next Problem


// Write the function definitions which will make the following function invocations function properly.
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.move = 0;

  this.moveCar = function() {
    return this.move += 10; 
  }

  this.getYear = function() {
    return this.move += 10;
  }

  //Function Invocations Here
}

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to add a move property and write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
  getYear.call(prius);
  getYear.call(mustang);

//New Problem

var myUser = {
 username: 'iliketurtles',
 age: 13,
 email: 'iliketurtles@gmail.com'
};

var getMyUsername = function() {
 return this.username;
};

var userName = getMyUsername.call(myUser); //Fix this

//Above you're given an object, and  a function. What will the getUsername function return?
//Note(no tests)
  //Answer Here
//this.username
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here
//nothing
//Fix the getMyUsername invocation so that userName will be equal to 'iliketurtles'.
