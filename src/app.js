import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
    //eligiendo elementos aleatoriamente
  for (let i in pronoun){
    var rndm1 = pronoun[i];
  for (let j in adj){
    var rndm2 = adj[j];
  for (let k in noun){
    let rndm3 = noun[k] + ".com";
    //enviando al HTML mediante id = domain
    let domain = document.createElement("h2");
    domain.innerHTML = rndm1 + rndm2 + rndm3;
    document.querySelector("div").appendChild(domain);
  }
  }
  }
};
