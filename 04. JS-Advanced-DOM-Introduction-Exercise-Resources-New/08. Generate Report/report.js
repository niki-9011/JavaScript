function generateReport() {
    let personObject = {};
    let personalAllObjects = [];
    let columnSetNumbers = [];

    let columnAll = document.querySelectorAll('thead tr th input');
    console.log(columnAll);

    for (let index = 0; index < columnAll.length; index++) {
        let checkboxState = columnAll[index].checked;


        if (checkboxState) {
            columnSetNumbers.push(index);
        }
    }

    let columnTitles = document.querySelectorAll('thead tr')[0].getElementsByTagName('th');
    let rowCount = document.querySelectorAll('tbody tr').length;

    for (let row = 0; row < rowCount; row++) {
        columnSetNumbers.forEach((element) => {
            let key = columnTitles[element].textContent.trim().toLowerCase();
            let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[element].textContent;
            personObject[key] = value;

        })

        personalAllObjects.push(Object.assign(personObject));
        personObject = {};
    }
    document.getElementById('output').innerHTML = JSON.stringify(personalAllObjects);
}