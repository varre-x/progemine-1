const moneyCounter = document.querySelector("#money-counter");
const clicker = document.querySelector("#clicker");
let money = 0;
let clickPower = 1;
let passivePower = 1;

setInterval(() => {
  money += (passivePower / 100);
  moneyCounter.textContent = Number(money.toFixed(0));
}, 10);

clicker.addEventListener("click", ()=>{
  money = money + clickPower;
  console.log(money);
  moneyCounter.textContent = Number(money.toFixed(0));
});

const upgrade1 = document.querySelector("#upgrade1");
upgrade1.addEventListener("click", ()=>{
  if (money >= 20){
    money = money - 20;
    clickPower++;
    console.log("Upgrade Bought")
    moneyCounter.textContent = Number(money.toFixed(0));
  } else {
    console.log("not enough money!")
  }
});

const upgrade2 = document.querySelector("#upgrade2");
upgrade2.addEventListener("click", ()=>{
  if (money >= 50){
    money = money - 50;
    clickPower = clickPower + 5;
    console.log("Upgrade Bought")
    moneyCounter.textContent = Number(money.toFixed(0));
  } else {
    console.log("not enough money!")
  }
});

const upgrade3 = document.querySelector("#upgrade3");
upgrade3.addEventListener("click", ()=>{
  if (money >= 20){
    money = money - 20;
    passivePower++;
    console.log("Upgrade Bought")
    moneyCounter.textContent = Number(money.toFixed(0));
  } else {
    console.log("not enough money!")
  }
});

const upgrade4 = document.querySelector("#upgrade4");
upgrade4.addEventListener("click", ()=>{
  if (money >= 50){
    money = money - 50;
    passivePower = passivePower + 5;
    console.log("Upgrade Bought")
    moneyCounter.textContent = Number(money.toFixed(0));
  } else {
    console.log("not enough money!")
  }
});
