function Car(model, year, miles){
   this.model = model;
   this.year    = year;
   this.miles  = miles;
   this.whatCar = function(){
     console.log(this.model);
  };
}
 
 
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2010, 5000);

civic.whatCar();
mondeo.whatCar();
