var input=document.querySelector("input");
var items=document.querySelector("li");
var inputbtn=document.querySelector("button");

function additem(){
    var data=input.value;
    if(data==0){
        alert("Please enter a valid input.");
    }
    else{

    
    // var ul=document.querySelector("ul");
    // var li=document.createElement("li");
    // li.innerText=data;
    // ul.appendChild(li);
    var h=document.createElement("div");
    h.innerHTML=data;
    document.querySelector(".list").appendChild(h);
    h.setAttribute("class","abc");
    input.value="";
    }
}
inputbtn.addEventListener("click",additem);

function clear(){
    document.querySelector(".list").innerHTML="";
}
document.querySelector(".clean").addEventListener("click",clear);

