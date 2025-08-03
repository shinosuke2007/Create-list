let inputbox = document.getElementById("input-box");
let listcontainer = document.getElementById("list-container");

function AddTask() {
    if (inputbox.value === '') {
        alert("You must write something😁");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    saveData();
}

listcontainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData();
    }else if (e.target.tagName === "SPAN"){
       let li = e.target.parentElement;
       if (li.classList.contains("checked")){
            li.remove()
       }
       saveData();
    }
})

function saveData(){
    localStorage.setItem("data", listcontainer.innerHTML)
}

function showTask(){
    listcontainer.innerHTML = localStorage.getItem("data");
}

showTask()