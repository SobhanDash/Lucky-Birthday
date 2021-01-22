var date = document.querySelector("#ip1");
var luckyDiv = document.querySelector("#ip2");
var submitDiv = document.querySelector("#submit");
var outputDiv = document.querySelector("#output");

submitDiv.addEventListener("click", isLucky)

function isLucky(){
    let sum = 0;
    let numlist = date.value.split(/[-,/]/);
    let lucky = luckyDiv.value;
    //console.log(numlist); 
    for(var i=0; i<numlist.length; i++)
    {
        sum = Number(sum) + Number(numlist[i]);
    }
    //console.log(sum);    
    if(lucky==""){
        outputDiv.innerText = "Enter Valid Number";
    }
    else if(sum % lucky == 0){
        outputDiv.innerText = "Your Bithday is lucky!";
    }
    else{
        outputDiv.innerText = "Your Bithday is not lucky :(";
    }
    
}