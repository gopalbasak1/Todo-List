let count = 0;

document.querySelector('#add-btn').addEventListener("click", function(){
    const inputElement = document.getElementById("input-box");
    const inputValue = inputElement.value;

    const ul = document.createElement("ul");
    ul.innerHTML = `
    <li>${inputValue} <span>\u00d7</span></li>
    
    `
    ;

    const container = document.querySelector("#list-container");
    container.appendChild(ul);

    document.getElementById("input-box").value = "";
    

    container.addEventListener("click", function(e){
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        
     }
     else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        
     }; false;
    })
    

});

