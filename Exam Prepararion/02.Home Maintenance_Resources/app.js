window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  const placeInput = document.getElementById("place");
  const actionInput = document.getElementById("action");
  const personInput = document.getElementById("person");
  const previewList = document.getElementById("task-list");
  const expensesList = document.getElementById("done-list");

  let formElement = document.querySelector("form");

  addButton.addEventListener("click", publish);

  function publish() {
    let isValid =
      placeInput.value === "" ||
      actionInput.value === "" ||
      personInput.value === "";

    if (isValid) {
      return;
    }

    let li = document.createElement("li");

    li.classList.add("clean-task");

    let article = document.createElement("article");

    let placeParagraph = document.createElement("p");
    placeParagraph.textContent = `Place: ${placeInput.value}`;
    let placeVal = placeInput.value;

    let actionParagraph = document.createElement("p");
    actionParagraph.textContent = `Action: ${actionInput.value}$`;
    let actionVal = actionInput.value;

    let personParagraph = document.createElement("p");
    personParagraph.textContent = `Person: ${personInput.value}`;
    let personVal = personInput.value;

    article.appendChild(placeParagraph);
    article.appendChild(actionParagraph);
    article.appendChild(personParagraph);

    let editBtn = document.createElement("button");
    let doneBtn = document.createElement("button");

    editBtn.classList.add("btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", edit);

    doneBtn.classList.add("btn");
    doneBtn.classList.add("done");
    doneBtn.textContent = "Done";
    doneBtn.addEventListener("click", done);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(doneBtn);

    previewList.appendChild(li);
    addButton.disabled = true;
    formElement.reset();

    function edit() {
      placeInput.value = placeVal;
      actionInput.value = actionVal;
      personInput.value = personVal;
      addButton.disabled = false;
      previewList.removeChild(li);
    }

    function done() {
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      li.appendChild(deleteButton);
      previewList.removeChild(li);
      li.removeChild(editBtn);
      li.removeChild(doneBtn);
      expensesList.appendChild(li);

      deleteButton.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}
