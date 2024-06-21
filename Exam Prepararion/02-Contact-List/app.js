function solve() {
    const [inputNameElement, inputPhoneElement] = document.querySelectorAll('#name, #phone');
    const inputCategoryElement = document.querySelector('#category');
    const addBtnElement = document.getElementById('add-btn');

    const checkListElement = document.getElementById('check-list');
    const contactListElement = document.getElementById('contact-list');


    addBtnElement.addEventListener('click', (e) => {
        const name = inputNameElement.value;
        const phone = inputPhoneElement.value;
        const category = inputCategoryElement.value;

        if (!name || !phone || !category) {
            return;
        }
        inputNameElement.value = '';
        inputPhoneElement.value = '';
        inputCategoryElement.value = '';

        const newLiElement = document.createElement('li');
        newLiElement.innerHTML = ` 
                            <article>
                                <p>name:${name}</p>
                                <p>phone:${phone}</p>
                                <p>category:${category}</p>
                            </article>
                             <div class="buttons">
                                 <button class="edit-btn"></button>
                                 <button class="save-btn"></button>
                             </div>
                              `;

        checkListElement.appendChild(newLiElement);

        const [editBtn, saveBtn] = document.querySelectorAll('.buttons button');

        editBtn.addEventListener('click', (e) => {
            const elementToEdit = e.currentTarget.parentElement.parentElement;
            console.log(elementToEdit)
            inputNameElement.value = elementToEdit.querySelector('article p:first-of-type').textContent.replace('name:', '');
            inputPhoneElement.value = elementToEdit.querySelector('article p:nth-of-type(2)').textContent.replace('phone:', '');
            inputCategoryElement.value = elementToEdit.querySelector('article p:last-of-type').textContent.replace('category:', '');
            elementToEdit.remove();
        });

        saveBtn.addEventListener('click', (e) => {
            const elementToSave = e.currentTarget.parentElement.parentElement;
            console.log(elementToSave)
            const buttonsContainer = elementToSave.querySelector('.buttons');
            buttonsContainer.remove();

            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('del-btn');
            elementToSave.appendChild(deleteBtn);
            contactListElement.appendChild(elementToSave);

            deleteBtn.addEventListener('click', (e) => {
                const elementForDelete = e.target.parentElement;
                elementForDelete.remove();
            });

        });
    });

}


window.addEventListener("load", solve);