function solve() {
  let text = document.getElementById('text').value.toLowerCase().split(" ");
  let nameCase = document.getElementById("naming-convention").value;
  let result = document.getElementById("result");
  let output = ""

  if (nameCase === "Camel Case") {
    output += text[0];
    for (let index = 1; index < text.length; index++) {
      output += text[index][0].toUpperCase() + text[index].slice(1);
    }
  } else if (nameCase === "Pascal Case") {
    for (let index = 0; index < text.length; index++) {
      output += text[index][0].toUpperCase() + text[index].slice(1);
    }
  } else {
    output = "Error!";
  }
  result.textContent = output;
}
