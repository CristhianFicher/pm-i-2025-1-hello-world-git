const nameInput = document.getElementById('name');
const messageP = document.getElementById('message');
const clearButton = document.getElementById('clear-button');

nameInput.onkeyup = (event) => {
    if (nameInput.value === '') {
        messageP.innerText = '';
    }
}

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' && nameInput.value.trim() !== '') {
        helloWorld();
    }
});

nameInput.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        clearFields();
    }
});

const helloWorld = () => {
    messageP.innerText = `Hello World, ${nameInput.value}!`;
}

const clearFields = () => {
    nameInput.value = '';
    messageP.innerText = '';
}

clearButton.addEventListener('click', clearFields);
