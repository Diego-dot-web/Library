const submitBtn = document.querySelector("button");
const display = document.querySelector(".display");
const form = document.querySelector("#yourBooks");

const myLibrary = [];

// the constructor
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(book) {
    myLibrary.push(book);
}


form.addEventListener("submit", (evt)=> {
    evt.preventDefault();
    
    let name = document.querySelector("#name").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read;

    if(document.querySelector("#read").checked){
        read = "Read";
    } else {
        read = "Not read yet"
    }
    
    let item = new Book(name, author, pages, read);

    addBookToLibrary(item);
    
    let lastItem = myLibrary[myLibrary.length - 1];

    const card = document.createElement("div");
    card.setAttribute("id", `${myLibrary.indexOf(lastItem)}`)
    card.textContent = `${lastItem.name} by ${lastItem.author}, ${lastItem.pages} pages, ${lastItem.read}`;
    card.className = "card";
    display.appendChild(card);

    const container = document.createElement("div");
    container.className = "container";
    card.appendChild(container);

    const clearBtn = document.createElement("button");
    clearBtn.textContent = "Delete";
    clearBtn.className = "deleteBtn";
    container.appendChild(clearBtn);

    const checkRead = document.createElement("button");
    if(read === "Read"){
        checkRead.textContent = "Read";
        checkRead.style.backgroundColor = "#9fff9c";
    } else {
        checkRead.textContent = "Not read"
        checkRead.style.backgroundColor = "#ff9c9c"
    }
    checkRead.className = "checkRead";
    container.appendChild(checkRead);

    deleteBooks();
    checkStatus();
    form.reset();
});

function deleteBooks() {
    const deleteBtns = document.querySelectorAll(".deleteBtn");

    deleteBtns.forEach((btn) => {
        btn.removeEventListener("click", handleDelete);
    });
    
    deleteBtns.forEach((btn, i) => {
        btn.setAttribute("id", `${i}`);
        btn.addEventListener("click", handleDelete);
    });
    
}

function handleDelete() {
    const index = parseInt(this.id);
    this.parentElement.parentElement.remove();
    reduceNumberId(index);
}

function reduceNumberId(index) {
    myLibrary.splice(index, 1)
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, i) => {
        card.setAttribute("id", `${i}`);
    });

    const deleteBtn = document.querySelectorAll(".deleteBtn");

    deleteBtn.forEach((btn, i) => {
        btn.setAttribute("id", `${i}`)
    });
}

function checkStatus(){
    const checkBtns = document.querySelectorAll(".checkRead");

    checkBtns.forEach(btn => {
        btn.removeEventListener("click", handleUpdate)
    });

    checkBtns.forEach(btn => {
        btn.addEventListener("click", handleUpdate);
    })
}

function handleUpdate(){
    const index = this.parentElement.parentElement.id;
    const card = myLibrary[index];

    if(card.read === "Read") {
        this.textContent = "Not Read"
        card.read = "Not Read"
        this.style.backgroundColor = "#ff9c9c"
    } else {
        this.textContent = "Read"
        card.read = "Read"
        this.style.backgroundColor = "#9fff9c";
    }
}