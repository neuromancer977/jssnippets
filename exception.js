var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        }
    }
    return a + b;
}

console.log(add(1,3));
try {
   add('seven',4);
} catch(e) {
   console.log(e.name + ': ' + e.message); 
}

