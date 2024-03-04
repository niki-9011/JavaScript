function sumTable() {
    const tabelElement = document.querySelectorAll("table tr");
    let totalSum = 0;

    for (let index = 1; index < tabelElement.length; index++) {
        const cells = tabelElement[index].children;
        const cellPrice = Number(cells[1].textContent);
        console.log(cellPrice)
        totalSum += cellPrice;
    }
    document.getElementById("sum").textContent = totalSum;
}   