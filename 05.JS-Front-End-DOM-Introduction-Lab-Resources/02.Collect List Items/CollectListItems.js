function extractText() {
    const items = document.getElementsByTagName('li');
    const result = [];

    for (const iterator of Array.from(items)) {
        result.push(iterator.textContent);
    }
    const textAreaElement = document.getElementById('result');
    textAreaElement.textContent = result.join('\n');
}