document.addEventListener('DOMContentLoaded', function() {
    let taskId = 1;

    window.addTask = function() {
        const table = document.getElementById("tasksTable").getElementsByTagName('tbody')[0];
        const inputAuthor = document.querySelector('input[placeholder="Nome do Autor"]');
        const inputBook = document.querySelector('input[placeholder="Nome do Livro"]');
        const inputDate = document.querySelector('input[type="date"]');

        // Create a new row
        const newRow = table.insertRow(table.rows.length);
        newRow.insertCell(0).innerText = taskId++;
        newRow.insertCell(1).innerText = inputAuthor.value;
        newRow.insertCell(2).innerText = inputBook.value;
        newRow.insertCell(3).innerText = inputDate.value;

        // Clear inputs after adding
        inputAuthor.value = '';
        inputBook.value = '';
        inputDate.value = '';
    };
});
