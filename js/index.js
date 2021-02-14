var randomNumber = 1; //1 to avoid null prop at first run
var numberOfRolls = 0;
var list = "";
var statsObject = {1:0,2:0,3:0,4:0,5:0,6:0};

/*Main Function*/
function runDiceMachine(){
  /*Restore dice to white*/
  setDiceColor(randomNumber,"white");
  /*Find a random number between 1-6*/
  randomNumber = diceRoll1();
  /*Updates the number of rolls*/
  numberOfRolls++;
  document.getElementById('roll-number').innerText = numberOfRolls;
  /*list Update*/
  list = list + " " + randomNumber + ",";
  document.getElementById('list-text').innerText = list;
  /*change dice img to red*/
  setDiceColor(randomNumber,"red");
  /*Table Update*/
  statsObject[randomNumber] ++;
  document.getElementById("tDice" + randomNumber).innerText  = statsObject[randomNumber];
  /*Table Update increase THIS %*/
  document.getElementById("tDice" + randomNumber + "%").innerText  = getThisPercent();
  /*Table Update decrease all the others %*/
  //// TODO: Update the rest of the %
}
/*Loop Function*/
function rollLoop(){
  var rollXTimes = document.getElementById("roll-x-times").value;
  var interval = setInterval(function() { if(rollXTimes>0){
    runDiceMachine();
    rollXTimes--;
  } else{
     clearInterval(interval);}
  },100);
}
/*roll dice model 1*/
function diceRoll1 (){
  return Math.ceil(Math.random() *6);
}
/*dice color change function*/
function setDiceColor(diceNumber,diceColor){
  var thisDice = "dice" + diceNumber;
  var dicePaint = "img/" + diceColor + diceNumber + ".png";
  document.getElementById(thisDice).setAttribute("src", dicePaint);
}
/*Get this % Function*/
function getThisPercent() {
  return (statsObject[randomNumber] * 100) / numberOfRolls; }
/*calling functions on button click*/
document.getElementById('btn-roll').onclick = runDiceMachine;
document.getElementById('btn-run').onclick = rollLoop;
