const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");
let itemCount = 0;

item.addEventListener(
    "keyup",
    function(event){
        if(event.key == "Enter"){
            addToDo(this.value);
            this.value = "";
        }
    }
)

const addToDo = (item) =>{
    itemCount++;
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        ${itemCount}.${item}
        <i class="fa-solid fa-x"></i>
    `;
    listItem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
    )
    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
            updateNumbering();
        }
    )
    toDoBox.appendChild(listItem);
}

