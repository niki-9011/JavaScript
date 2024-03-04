window.addEventListener("load", solve);

function solve() {
  const addButton = document.getElementById("add-btn");
  const expenseInput = document.getElementById("expense");
  const amountInput = document.getElementById("amount");
  const dateInput = document.getElementById("date");
  const previewList = document.getElementById("preview-list");
  const expensesList = document.getElementById("expenses-list");
  

  let formElement = document.querySelector("form");
  let deleteButton = document.querySelector(".delete");

  addButton.addEventListener("click", publish);

  function publish() {
    let isValid =
      expenseInput.value === "" ||
      amountInput.value === "" ||
      dateInput.value === "";

    if (isValid) {
      return;
    }

    let li = document.createElement("li");
    li.classList.add("expense-item");

    let article = document.createElement("article");

    let expenseParagraph = document.createElement("p");
    expenseParagraph.textContent = `Type: ${expenseInput.value}`;
    let expenseVal = expenseInput.value;

    let amountParagraph = document.createElement("p");
    amountParagraph.textContent = `Amount: ${amountInput.value}$`;
    let amountVal = amountInput.value;

    let dateParagraph = document.createElement("p");
    dateParagraph.textContent = `Date: ${dateInput.value}`;
    let dateVal = dateInput.value;

    article.appendChild(expenseParagraph);
    article.appendChild(amountParagraph);
    article.appendChild(dateParagraph);

    let editBtn = document.createElement("button");
    let okBtn = document.createElement("button");

    editBtn.classList.add("btn");
    editBtn.classList.add("edit");
    editBtn.textContent = "EDIT";
    editBtn.addEventListener("click", edit);

    okBtn.classList.add("btn");
    okBtn.classList.add("ok");
    okBtn.textContent = "OK";
    okBtn.addEventListener("click", ok);

    li.appendChild(article);
    li.appendChild(editBtn);
    li.appendChild(okBtn);

    previewList.appendChild(li);
    addButton.disabled = true;
    formElement.reset();

    function edit() {
      expenseInput.value = expenseVal;
      amountInput.value = amountVal;
      dateInput.value = dateVal;
      addButton.disabled = false;
      previewList.removeChild(li);
    }

    function ok() {
      previewList.removeChild(li);
      li.removeChild(editBtn);
      li.removeChild(okBtn);
      expensesList.appendChild(li);
      deleteButton.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}
