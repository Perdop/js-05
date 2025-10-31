const leia = require('readline-sync'); 

var a, b, c 

a = leia.question("Insira a 1 caracteristica: (vertebrado / invertebrado) ", {
    limit: ["vertebrado", "invertebrado"]    
});
b = leia.question("Insira a 2 caracteristica: (ave / mamifero / inseto / anelideo) ", {
    limit: ["ave", "mamifero", "inseto", "anelideo"]
});
c = leia.question("Insira a 3 caracteristica: (carnivoro / onivoro / herbivoro / hematofago) ", {
    limit: ["carnivoro", "onivoro", "herbivoro", "hematofago"]
});

if (a === "vertebrado") {
   if (b === "ave") {
    if (c === "carnivoro") {
        console.log("aguia");
        
    } else if (c === "onivoro") {
        console.log("pomba");
        
    }

   } else if (b === "mamifero") {
        if (c === "onivoro") {
            console.log("homem");
            
        } else if (c === "herbivoro") {
            console.log("vaca");
            
        }
   }
} else if (a === "invertebrado") {
    if (b === "inseto") {
        if (c === "hematofago") {
            console.log("Pulga");
            
        } else if (c === "herbivoro") {
            console.log("Lagarta");
            
        }
    } else if(b === "anelideo"){
        if (c === "hematofago") {
            console.log("sanguessuga");
            
        } else if (c === "onivoro") {
            console.log("minhoca");
            
        } 
    }
}