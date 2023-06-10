import "bootstrap";
import "./style.css";

/*Creating the array to pick card symbols*/
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onclick = function myClickHandler() {
  /*Function to pick a random position of arr*/
  function randomCard(arr) {
    return Math.floor(Math.random() * arr.length);
  }

  //Identifying the ramdonm position of arr from the last function
  let whose = who[randomCard(who)];
  let actions = action[randomCard(action)];
  let whats = what[randomCard(what)];
  let whens = when[randomCard(when)];
  let wholexcuse = whose + " " + actions + " " + whats + " " + whens;
  console.log("wholexcuse");
  //Searching the simbols to be replaced and print them on the page
  let card = document.querySelector("#excuse");

  card.innerHTML = wholexcuse;

  //console.log("$whose", "$actions");
};
