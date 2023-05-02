

const contenitore = document.getElementById("container");
console.log(container);

for (let i = 1; i <= 100; i++) {
   
let text;

  if(i % 15 === 0){

        text = "FizzBuzz";
        console.log( "FizzBuzz" );
        
    }
    
   else if(i % 3 === 0){
        text = "Fizz";
        console.log( "Fizz" );
        
   }

   else if(i % 5 === 0){
    text = "Buzz";
    console.log( "Buzz" );

}

   else{
    text = i;
    console.log(i);

   }

    const quadrato = document.createElement ("div");

    quadrato.append(text);

    contenitore.append(quadrato);

}


