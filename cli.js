const readlineSync = require('readline-sync');
const chalk = require('chalk');
const log = console.log;

var userName = readlineSync.questionapp (chalk.yellow("What is your name? \n"));
log(chalk.bold.bgCyan.red(("\nWelcome! ") + (userName) + (" Let's Start! \n")));

var dob = readlineSync.question(chalk.bold.blue("Enter your Date of birth in dd/mm/yyyy \n"));
var lucky = readlineSync.question(chalk.bold.cyan("Enter your lucky number \n"));


var sum = 0;
var numlist = dob.split(/[-,/]/);
// log(numlist); 
for(var i=0; i<numlist.length; i++){
  sum = Number(sum) + Number(numlist[i]);
}
// log(sum);
if(sum % lucky == 0){
  log(chalk.red.bold("Your Bithday is lucky!"));
}
else{
  log(chalk.red.bold("Your Bithday is not lucky :("));
}