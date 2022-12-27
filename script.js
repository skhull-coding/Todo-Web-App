let nlines = document.getElementById("nav-line");

nlines.addEventListener("click", () => {
  let fLine = nlines.children[0];
  let sLine = nlines.children[1];
  let lLine = nlines.children[2];
  let ulnav = nlines.nextElementSibling;
  ulnav.classList.toggle("border-t");
  ulnav.classList.toggle("h-32");
  ulnav.classList.toggle("h-0");
  ulnav.classList.toggle("-z-10");
  ulnav.classList.toggle("py-4");
  fLine.classList.toggle("bg-emerald-400");
  sLine.classList.toggle("rotate-45");
  lLine.classList.toggle("-rotate-45");
  lLine.classList.toggle("-translate-y-2.5");
});
