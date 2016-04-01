// custom constrution function (PATTERN)
var Car = function(model, year, miles){
   this.model = model;  // attenzione all'uso di this, non
   this.year    = year; // non e' il this di java (vedi sotto)
   this.miles  = miles;
   this.whatCar = function(){
     console.log(this.model);
  };
}

var civic = new Car("Honda Civic", 2009, 20000); // se dimantico la new =>
var mondeo = new Car("Ford Mondeo", 2010, 5000); // disastro (per via del this)

civic.whatCar();
mondeo.whatCar();


// alternativa
// self invoking constructor (PATTERN)
var Car1 = function(model, year, miles){
  if (this instanceof Car1) {
     this.model = model;  // alternativamente uso that come workaround
     this.year    = year; //
     this.miles  = miles;
     this.whatCar = function(){
       console.log(this.model);
     };
  } else {
   return new Car1(model, year, miles);
  }
}

var civic1 = new Car1("Honda Civic1", 2010, 30000); // se dimantico la new =>
var mondeo1 = Car1("Ford Mondeo1", 2011, 6000); // OK

civic1.whatCar();
mondeo1.whatCar();
