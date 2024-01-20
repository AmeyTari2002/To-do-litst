const inputbox = document.querySelector('#input-text')
const listContainer = document.querySelector('#list-container')


function add() {
    if (inputbox.value === '') {
        alert("Enter someting")
    }
    else {
        let li = document.createElement('li')
        console.log(inputbox.value)
        li.innerHTML = inputbox.value
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        // console.log(span.innerHTML)
        listContainer.appendChild(li)
        li.appendChild(span)

    }
    inputbox.value = ""
    savedata();
}

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {

        e.target.classList.add("checked");
        savedata();
    }
    if (e.target.tagName === "LI" && e.target.classList == "checked") {

        e.target.classList.remove();
        savedata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savedata();
    }
});

function savedata() {
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data")
}

showTask();