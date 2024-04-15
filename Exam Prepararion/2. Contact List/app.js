window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const categoryInput = document.getElementById("category");
  const checkList = document.getElementById("check-list");
  const contactList = document.getElementById("contact-list");

  let formElement = document.querySelector("form");

  addButton.addEventListener("click", publish);

  function publish() {
    let isValid =
      nameInput.value === "" ||
      phoneInput.value === "" ||
      categoryInput.value === "";

    if (isValid) {
      return;
    }

    let li = document.createElement("li");

    li.classList.add("clean-task");

    let article = document.createElement("article");

    let placeParagraph = document.createElement("p");
    placeParagraph.textContent = `name:${nameInput.value}`;
    let placeVal = nameInput.value;

    let actionParagraph = document.createElement("p");
    actionParagraph.textContent = `phone:${phoneInput.value}`;
    let actionVal = phoneInput.value;

    let personParagraph = document.createElement("p");
    personParagraph.textContent = `category:${categoryInput.value}`;
    let personVal = categoryInput.value;

    article.appendChild(placeParagraph);
    article.appendChild(actionParagraph);
    article.appendChild(personParagraph);

    let editBtn = document.createElement("button");
    let saveBtn = document.createElement("button");

    editBtn.classList.add("btn");
    editBtn.classList.add("edit-btn");
    // editBtn.textContent = "Edit";
    editBtn.addEventListener("click", edit);

    saveBtn.classList.add("btn");   
    saveBtn.classList.add("save-btn");
    // saveBtn.textContent = "Save";
    saveBtn.addEventListener("click", done);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(saveBtn);

    checkList.appendChild(li);
    addButton.disabled = true;
    formElement.reset();

    function edit() {
      nameInput.value = placeVal;
      phoneInput.value = actionVal;
      categoryInput.value = personVal;
      addButton.disabled = false;
      checkList.removeChild(li);
    }

    function done() {
      let deleteButton = document.createElement("button");
      deleteButton.classList.add("del-btn");
      li.appendChild(deleteButton);
      checkList.removeChild(li);
      li.removeChild(editBtn);
      li.removeChild(saveBtn);
      contactList.appendChild(li);

      deleteButton.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}
