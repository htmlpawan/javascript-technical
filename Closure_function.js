// closure function
function outerFunction() {
    let outerVariable = 0;

   return {
           pluse: function(){
               outerVariable++;
              console.log(outerVariable);
           },
           min: function(){
               outerVariable--;
              console.log(outerVariable);
           }
        };

}

const closureExample = outerFunction();

closureExample.pluse();  // Output: I am from outer scope
closureExample.pluse();  // Output: I am from outer scope
closureExample.pluse();  // Output: I am from outer scope
closureExample.pluse();  // Output: I am from outer scope



closureExample.min();  // Output: I am from outer scope
closureExample.min();  // Output: I am from outer scope
closureExample.min();  // Output: I am from outer scope
closureExample.min();  // Output: I am from outer scope
