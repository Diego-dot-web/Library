const submitBtn = document.querySelector("button");
const display = document.querySelector(".display");
const form = document.querySelector("#yourBooks");
const deleteBtn = document.querySelector(".deleteBtn");



const myLibrary = [];

// the constructor
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

// const atomic = new Book("Atomic Habits: Tiny changes, Remarkable Results", "James Clear","400", "Not Read");
// const shadowhunters = new Book("Shadowhunters 1", "Casandra Clare", "400", "Read");
// const cantHurtMe = new Book("Can't Hurt Me: Master Your Mind and Defy The Odds", "David Goggings", "400", "Read")

// myLibrary.push(atomic)
// myLibrary.push(shadowhunters)
// myLibrary.push(cantHurtMe)

function addBookToLibrary(book) {
    myLibrary.push(book);
}


form.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    
    let name = document.querySelector("#name").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    
    let item = new Book(name, author, pages, read);
    console.log(item)
    
    addBookToLibrary(item);

    myLibrary.forEach(item => {
        const card = document.createElement("div");
        card.textContent = `${item.name} by ${item.author}, ${item.pages} pages, ${item.read}`;
        card.className = "card";
        display.appendChild(card);
    
        const container = document.createElement("div");
        container.className = "container";
        card.appendChild(container);
    
        const delteBtn = document.createElement("button");
        delteBtn.textContent = "Delete";
        delteBtn.className = "deleteBtn";
        container.appendChild(delteBtn);
    
        const checkReadLabel = document.createElement("label");
        checkReadLabel.textContent = "Read";
        checkReadLabel.className = "checkReadLabel";
        container.appendChild(checkReadLabel);
    
        const checkRead = document.createElement("input");
        checkRead.type = "checkbox"
        checkRead.textContent = "Read";
        checkRead.className = "checkRead";
        container.appendChild(checkRead);
    });

    myLibrary.splice(0,1);
});

if(display.hasChildNodes()){
    deleteBtn.addEventListener("click", ()=>{
        console.log(11)
        deleteBtn.parentElement.parentElement.remove();
    })
}



