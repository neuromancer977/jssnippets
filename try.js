

var arr =  [1,2,3,4];

var arr2 = arr.filter((item) => {return item%2 === 0});
console.log(arr);
console.log(arr2);


function* idMaker(){
  var index = 0;
  while(true)
    yield index++;
}

// let gen = [...idMaker()];

// gen.filter((item) => {return item%2 === 0});
// .filter(function (n) { return n % 2 === 0; })
// .pick(100)
// .sum();


//
// console.log(s);

// Stream.create(0.100)
// .filter(function (n) { return n % 2 === 0; })
// .pick(100)
// .sum();
