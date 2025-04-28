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
  let rndm1 = pronoun[Math.floor(Math.random()*pronoun.length)];
  let rndm2 = adj[Math.floor(Math.random()*adj.length)];
  let rndm3 = noun[Math.floor(Math.random()*noun.length)] + ".com";
  //enviando al HTML mediante id = excuse
  document.querySelector("#domain").innerHTML = rndm1 + rndm2 + rndm3;
};
