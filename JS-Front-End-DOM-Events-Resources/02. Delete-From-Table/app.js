function deleteByEmail() {
    let input = document.querySelector('input[name="email"]').value;
    let allEmail = Array.from(document.querySelector('tbody').children);
    let result = document.getElementById('result');

    for (const iterator of allEmail) {
        const email = iterator.children[1]
        if (input === email.textContent) {
            iterator.remove();
            result.textContent = "Deleted.";
        } else result.textContent = "Not found.";
    }
}