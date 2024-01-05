const submitBtn = document.querySelector("button");
const display = document.querySelector(".display");
const form = document.querySelector("#yourBooks");

const myLibrary = [];

// the constructor
function Book(name, author, pages, read, code) {
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
    let read = document.querySelector("#read").value;
    
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

    const checkReadLabel = document.createElement("label");
    checkReadLabel.textContent = "Read";
    checkReadLabel.className = "checkReadLabel";
    container.appendChild(checkReadLabel);

    const checkRead = document.createElement("input");
    checkRead.type = "checkbox"
    checkRead.textContent = "Read";
    checkRead.className = "checkRead";
    container.appendChild(checkRead);

    deleteBooks()

    
});

function deleteBooks() {
    const deleteBtns = document.querySelectorAll(".deleteBtn");
    
    deleteBtns.forEach(btn => {
        btn.setAttribute("id", `${btn.parentElement.parentElement.id}`);
    
        btn.addEventListener("click", ()=>{
            btn.parentElement.parentElement.remove()
        });
    
    });
}
