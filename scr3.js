let copybtns;
let delbtns;
let edbtns;
let notcnt = document.getElementById("notes-container");
const loadNotes = () => {
  notcnt.innerHTML = "";

  for (item in localStorage) {
    if (typeof localStorage[item] == "number") {
      break;
    }
    notcnt.innerHTML += `<div class="w-96 bg-slate-900 bg-opacity-80 rounded-md flex flex-col" id="notepad">
    <div id="topbar" class="flex pt-4 px-4 w-full">
        <div id="titletopbar" class="text-white mx-auto">
            <h1>
                <span onclick="fuc1(this);">${decodeURIComponent(item)}</span>
            </h1>
        </div>
    </div>
    <div id="notespace" class="p-4 h-72">
        <textarea name="note" id="note"
            class="min-w-full outline-none resize-none h-full p-2 rounded-md bg-slate-400 bg-opacity-30 text-lg tracking-wide text-white" disabled >${decodeURIComponent(
              localStorage[item]
            )}</textarea>
    </div>
    <div class="ml-auto mb-4 mx-4 flex gap-1">
    <span onclick="DeleteNote(this);" class="deletenote py-1 px-1 rounded-md cursor-pointer bg-red-800 hover:bg-red-600 text-white flex items-center material-symbols-outlined ">delete</span>
    <button onclick="CopyText(this);" class="copynote py-1 px-4 rounded-md bg-blue-800 hover:bg-blue-600 text-white flex items-center">Copy Note</button>
    <button onclick="EditNote(this);" class=" editnote py-1 px-4 rounded-md bg-blue-800 hover:bg-blue-600 text-white flex items-center">Edit Note</button>
    </div>
    `;
  }

  copybtns = document.getElementsByClassName("copynote");
  delbtns = document.getElementsByClassName("deletenote");
  edbtns = document.getElementsByClassName("editnote");
};

const fuc1 = (e) => {
  console.log(e);
};

loadNotes();
const CopyText = (el) => {
  let copytext = decodeURIComponent(
    localStorage.getItem(
      encodeURIComponent(
        el.parentElement.parentElement.children[0].firstElementChild
          .firstElementChild.firstElementChild.textContent
      )
    )
  );
  navigator.clipboard.writeText(copytext);
  new Promise((resolve, reject) => {
    el.innerHTML = `<span class="material-symbols-outlined ">done</span> <span>Copied</span>`;
    el.disabled = true;
    el.classList.toggle("pl-2");
    el.classList.toggle("cursor-not-allowed");
    el.classList.toggle("hover:bg-blue-600");

    setTimeout(() => {
      el.disabled = false;
      el.classList.toggle("cursor-not-allowed");
      el.classList.toggle("hover:bg-blue-600");
      el.classList.toggle("pl-2");
      el.innerHTML = `Copy Note`;
    }, 4000);
  });
};

// Array.from(copybtns).forEach((el) => {
//     el.addEventListener("click", CopyText);
// })

const DeleteNote = (el) => {
  // console.log(el.parentElement.parentElement.children[0].firstElementChild.firstElementChild.firstElementChild.textContent)
  let deleten =
    el.parentElement.parentElement.children[0].firstElementChild
      .firstElementChild.firstElementChild.textContent;
  localStorage.removeItem(encodeURIComponent(deleten));
  loadNotes();
  // console.log(el, deleten)
};

// Array.from(delbtns).forEach((el) => {
//     el.addEventListener("click", )
// })

// Array.from(edbtns).forEach((el) => {
//     el.addEventListener("click", );
// })

const EditNote = (el) => {
  if (el.textContent == "Edit Note") {
    el.parentElement.parentElement.children[1].firstElementChild.disabled = false;
    el.parentElement.parentElement.children[1].firstElementChild.focus();
    el.textContent = "Save Note";
  } else {
    let noten = encodeURIComponent(
      el.parentElement.parentElement.children[0].firstElementChild
        .firstElementChild.firstElementChild.textContent
    );
    let notev = encodeURIComponent(
      el.parentElement.parentElement.children[1].firstElementChild.value
    );
    localStorage.setItem(noten, notev);
    el.parentElement.parentElement.children[1].firstElementChild.disabled = true;
    el.textContent = "Edit Note";
  }
};
