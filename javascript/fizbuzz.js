

const contenitore = document.getElementById("container");
console.log(container);

for (let i = 1; i <= 100; i++) {
   
const quadrato = document.createElement ("div");

let text;

  if(i % 15 === 0){

        text = "FizzBuzz";
        console.log( "FizzBuzz" );
        quadrato.classList.add("yellow");

        
    }
    
   else if(i % 3 === 0){
        text = "Fizz";
        console.log( "Fizz" );
        quadrato.classList.add("red"); 
        
        
   }

   else if(i % 5 === 0){
    text = "Buzz";
    console.log( "Buzz" );
    quadrato.classList.add("green"); 

}

   else{
    text = i;
    console.log(i);
    quadrato.classList.add("blue"); 

   }

   quadrato.append(text);

    contenitore.append(quadrato);
   

}


