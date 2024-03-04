function addItem() {
    let input = document.getElementById('newItemText').value;
    let newLI = document.createElement('li');
    newLI.textContent = input;
    let ulList = document.getElementById('items');
    ulList.appendChild(newLI);
}