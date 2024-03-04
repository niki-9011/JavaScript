function solve() {
  let text = document.getElementById('input').value;
  let format = document.getElementById('output');
  let sentences = text.split('.');

  sentences = sentences.filter(s => s.length > 0).map(s => s += '.');

  while (sentences.length > 0) {
    let p = document.createElement('p');
    p.textContent = sentences.splice(0, 3).join('');

    format.appendChild(p);
  }
}