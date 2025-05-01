import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
    //creando un bucle for para recorrer los arrays 
  for (let i in pronoun){
    var elem1 = pronoun[i];
  for (let j in adj){
    var elem2 = adj[j];
  for (let k in noun){
    let elem3 = noun[k] + ".com";
    //creando un elemento h2 para mostrar el resultado
    let domain = document.createElement("h2");
    domain.innerHTML = elem1 + elem2 + elem3;
    document.querySelector("div").appendChild(domain);
  }
  }
  }
};
