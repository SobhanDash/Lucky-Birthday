var date = document.querySelector("#ip1");
var luckyDiv = document.querySelector("#ip2");
var submitDiv = document.querySelector("#submit");
var outputDiv = document.querySelector("#output");
document.getElementById("output").style.display = "none";

submitDiv.addEventListener("click", isLucky)

function isLucky(){
    let sum = 0;
    let numlist = date.value.split(/[-,/]/);
    console.log(numlist)
    let lucky = luckyDiv.value;
    //console.log(numlist); 
    for(var i=0; i<numlist.length; i++)
    {
        sum = Number(sum) + Number(numlist[i]);
    }
    //console.log(sum);    
    if(lucky===""){
        document.getElementById("output").style.display = "block";
        outputDiv.innerText = "Enter Valid Number";
    }
    else if(numlist[0]==="" || numlist[1]==="" || numlist[2]===""){
        document.getElementById("output").style.display = "block";
        outputDiv.innerText = "Enter The Date";
    }
    else if(sum % lucky === 0){
        document.getElementById("output").style.display = "block";
        outputDiv.innerText = "Your Bithday is lucky!";
    }
    else{
        document.getElementById("output").style.display = "block";
        outputDiv.innerText = "Your Bithday is not lucky :(";
    }
    
}