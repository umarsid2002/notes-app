showNodes();
let submitTxt = document.getElementById("addBtn");

submitTxt.addEventListener("click", function (e) {
  let addText = document.getElementById("addTxt");
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }
  noteObj.push(addText.value);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  addText.value = "";
  console.log(noteObj);
  showNodes();
});

//Function to show notes
function showNodes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  let html = "";
  noteObj.forEach(function (element, index) {
    html += `
    <div class="NoteCard card mx-2 my-2" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${index + 1}</h5>
      <p class="card-text">${element}</p>
      <a id='${index}' onclick='deleteNote(this.id)' class="btn btn-primary">Delete Note</a>
    </div>
  </div>
    `;
  });

  let myNotes = document.getElementById("notes");
  if (noteObj.length != 0) {
    myNotes.innerHTML = html;
  } else {
    myNotes.innerHTML = `<h4>You don't have any nodes at this moment</h4>`;
  }
}

function deleteNote(index) {
  console.log("I am deleting", index);

  let notes = localStorage.getItem("notes");
  if (notes == null) {
    noteObj = [];
  } else {
    noteObj = JSON.parse(notes);
  }

  noteObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(noteObj));
  showNodes();
}

let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let NoteCard = document.getElementsByClassName("NoteCard");
  Array.from(NoteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
