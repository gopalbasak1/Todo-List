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
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData(); // Call saveData after toggling the class
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData(); // Call saveData after removing the task
        }
    });

    function saveData(){
        localStorage.setItem("data", container.innerHTML);
    }

    function showTask(){
        container.innerHTML = localStorage.getItem("data");
    }

    showTask();

});
