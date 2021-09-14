const selectionButtons = document.querySelectorAll("[data-selection]");

selectionButtons.forEach((selectionButton) => {
  selectionButton.addEventListener("click", (e) => {
    const selectionName = selectionButton.dateset.selection;
    makeSelection(selectionName);
  });
});

function makeSelection(selection) {
  console.log(selection);
}
