const gcolor =  "rgb(105, 209, 105)";
const rcolor = "rgb(250, 126, 126)";
const itemsDiv = document.querySelector(".items");
function checkVoting(){
    let age = document.getElementById("input").value;
    if(age < 18){
        document.getElementById("result").textContent = "Sorry, you are not eligible to vote yet.";
        itemsDiv.style.backgroundColor = rcolor;
    }
    else if(age >= 18 && age <= 49){
        document.getElementById("result").textContent = "You are eligible to vote!";
        itemsDiv.style.backgroundColor = gcolor;
    }
    else if(age > 50 && age < 100){
        document.getElementById("result").textContent = "You are eligible to vote! Also you are very old";
        itemsDiv.style.backgroundColor = gcolor;  
    }
    else if(age >= 100){
        document.getElementById("result").textContent = "Invalid age, you cannot be that old";
        itemsDiv.style.backgroundColor = "rgb(224, 221, 69)";
    }
    else {
        document.getElementById("result").textContent = "Wrong Data Type";
        itemsDiv.style.backgroundColor = "rgb(250, 250, 250)";
    }
}

const inputElement = document.getElementById("input");

inputElement.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkVoting();
  }
});
