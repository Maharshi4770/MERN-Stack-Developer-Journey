const ib = document.getElementById("input-box");
const lc = document.getElementById("list-container");

function action(){
    if (ib.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = ib.value;  
        lc.appendChild(li);   
        let span = document.createElement("span")
        span.innerHTML = "\u00d7" 
        li.appendChild(span)            
    }
    ib.value = ""
    savedata();
}
lc.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("data",lc.innerHTML);
}
function show(){
    lc.innerHTML=localStorage.getItem("data")
}
show()

