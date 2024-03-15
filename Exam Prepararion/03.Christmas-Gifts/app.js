const baseUrl = "http://localhost:3030/jsonstore/gifts/";
const loadButton = document.getElementById("load-presents");
const giftList = document.getElementById("gift-list");
const giftInput = document.getElementById("gift");
const priceInput = document.getElementById("price");
const forInput = document.getElementById("for");
const formAddButton = document.getElementById("add-present");
const formEditButton = document.getElementById("edit-present");
const formElement = document.querySelector("#form form");

loadButton.addEventListener("click", loadGifts);

formAddButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (giftInput.value.trim() === "" || priceInput.value.trim() === "" || forInput.value.trim() === "") {
    // alert("Please fill in all fields before adding a gift.");
    return; // Exit the function if any input is empty
  }

  // Get data from inputs
  const newGifts = {
    gift: giftInput.value,
    price: priceInput.value,
    for: forInput.value,
  };
  // Sent post request to server
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newGifts),
  })
    // Get vacantions
    .then(loadGifts)
  clearForm();
});

// Clear inputs
function clearForm() {
  giftInput.value = "";
  priceInput.value = "";
  forInput.value = "";
}

function loadGifts() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((result) => {
      renderGifts(Object.values(result));
    });
}

formEditButton.addEventListener("click", (e) => {
  e.preventDefault();

  const giftID = formElement.dataset.gift;

  //get for
  const giftData = {
    _id: giftID,
    gift: giftInput.value,
    price: priceInput.value,
    for: forInput.value,
  };

  //put request
  fetch(`${baseUrl}/${giftID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(giftData),
  })
    .then(loadGifts)

    //deactivate edit button
    .then(() => {
      formAddButton.removeAttribute("disabled");

      //activate add button
      formEditButton.setAttribute("disabled", "disabled");

      //clear form
      clearForm();

      //delete _id
      delete formElement.dataset.gift;
    });
});

function renderGifts(gifts) {
  giftList.innerHTML = "";

  gifts
    .map(renderGift)
    .forEach((giftElement) => giftList.appendChild(giftElement));
}

function renderGift(gift) {
  const container = document.createElement("div");
  container.className = "gift-sock";

  const h2Element = document.createElement("h2");
  h2Element.textContent = gift.gift;

  const h3ForElement = document.createElement("h3");
  h3ForElement.textContent = gift.for;

  const h3PriceElement = document.createElement("h3");
  h3PriceElement.textContent = gift.price;

  const changeButton = document.createElement("button");
  changeButton.className = "change-btn";
  changeButton.textContent = "Change";


  changeButton.addEventListener("click", () => {
    // deactivate add gift button
    formAddButton.setAttribute("disabled", "disabled");

    // activate the edit gift button
    formEditButton.removeAttribute("disabled");

    // save gift id
    formElement.dataset.gift = gift._id;

    // add to form fields
    giftInput.value = gift.gift;
    priceInput.value = gift.price;
    forInput = gift.for;

    // remove from confirmed list
    container.remove();
  });

  const doneButton = document.createElement("button");
  doneButton.className = "delete-btn";
  doneButton.textContent = "Done";
  doneButton.addEventListener("click", () => {
    //send delete request
    fetch(`${baseUrl}/${gift._id}`, {
      method: "DELETE",
    })
      //load gift
      .then(loadGifts);
  });

  container.appendChild(h2Element);
  container.appendChild(h3ForElement);
  container.appendChild(h3PriceElement);
  container.appendChild(changeButton);
  container.appendChild(doneButton);

  return container;
}
