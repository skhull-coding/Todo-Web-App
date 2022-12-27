let sbtn = document.getElementById("savenote");
let note = document.getElementById("note");

// note.focus();

let sdb = document.getElementById("savedialogbox");
let notename = document.getElementById("notename");
let nnsave = notename.nextElementSibling;
let notev, noten;

sbtn.addEventListener("click", () => {
  notev = note.value.trim();
  if (notev == "") {
    console.log("Nothing to save. Please Write to Save Note!!");
  } else {
    if (noten != undefined) {
      notev = encodeURIComponent(notev);
      localStorage.setItem(noten, notev);
    } else {
      notev = encodeURIComponent(notev);
      sdb.classList.toggle("hidden");
      sdb.classList.toggle("flex");
      notename.focus();
    }
  }
});

nnsave.addEventListener("click", () => {
  noten = notename.value.trim();
  if (noten == "") {
    console.log("Please enter a title for Note!!");
  } else {
    noten = encodeURIComponent(noten);
    localStorage.setItem(noten, notev);
    sdb.classList.toggle("hidden");
    sdb.classList.toggle("flex");
    document.getElementById(
      "titletopbar"
    ).firstElementChild.firstElementChild.innerHTML = decodeURIComponent(noten);
  }
});
