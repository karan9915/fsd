console.log('This is App JS');

showNotes();
// If user adds a note. Add it to the localStorage.

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', function (e) {
    let addText = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);
    showNotes();
});

// Function to show elements from localStorage.
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick="deleteNode(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    });

    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
    }
}

// Function to delete a Node.
function deleteNode(index) {
    console.log('I am deleting', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input",function() {
    let inputVal = search.value;
    // console.log("Input Event Fired!", inputVal);
    let noteCards = document.getElementsByClassName("noteCard");
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})

// Further features
// 1. Add Title. 
// 2. Mark a node as important. 
// 3. Separate nodes by user.
// 4. Sync and host to a web server. 