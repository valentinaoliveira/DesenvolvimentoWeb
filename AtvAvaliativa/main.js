let idCounter = 0; // Inicializa o contador de quantidade de livros adicionados

// Carrega os dados da tabela do armazenamento local quando a página carrega
window.onload = function() {
    const data = JSON.parse(localStorage.getItem("tableData")) || [];
    data.forEach(entry => addRow(entry));
    idCounter = data.length > 0 ? data[data.length - 1].id : 0;
}

function addEntry() {
    // Incrementa o contador de IDs
    idCounter++;

    // valor das coisas
    const name = document.getElementById("tituloInput").value;
    const email = document.getElementById("autorInput").value;
    const phone = document.getElementById("dataInput").value;

    // adiciona e salva 
    const entry = { id: idCounter, Titulo, Autor, Data };
    addRow(entry);
    saveToLocalStorage();

    // Limpa os campos da tabela
    document.getElementById("myForm").reset();
}

function addRow(entry) {
    // Cria uma nova linha para a tabela
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${entry.id}</td>
        <td>${entry.titulo}</td>
        <td>${entry.autor}</td>
        <td>${entry.data}</td>
        <td><button onclick="deleteEntry(${entry.id})">Deletar</button></td>
        <td><button onclick="openEditPopup(${entry.id})">Editar</button></td>
    `;

    // Adiciona a nova linha na tabela
    document.getElementById("tableBody").appendChild(newRow);
}

function deleteEntry(id) {
    // Encontra o índice da linha
    const rowIndex = [...document.querySelectorAll("#tableBody tr")].findIndex(row => row.cells[0].innerText === String(id));

    // Remove a linha da tabela
    document.getElementById("tableBody").deleteRow(rowIndex);

    // Atualiza o contador de IDs
    idCounter--;

    // Renomeia os IDs após a exclusão
    renumberIDs();

    // Salva os dados atualizados 
    saveToLocalStorage();
}

function renumberIDs() {
    const rows = document.querySelectorAll("#tableBody tr");
    rows.forEach((row, index) => {
        row.cells[0].innerText = index + 1;
    });
}

function openEditPopup(id) {
    // tem os dados digitados 
    const row = [...document.querySelectorAll("#tableBody tr")].find(row => row.cells[0].innerText === String(id));
    const titulo = row.cells[1].innerText;
    const autor = row.cells[2].innerText;
    const data = row.cells[3].innerText;

    // Preenche a tabela com os dados digitados
    document.getElementById("editIdInput").value = id;
    document.getElementById("editedTituloInput").value = titulo;
    document.getElementById("editedAutorInput").value = autor;
    document.getElementById("editedDataInput").value = data;

    // Exibe o popup de edição
    document.getElementById("editPopup").style.display = "block";
}

function closeEditPopup() {
    // Oculta o popup de edição
    document.getElementById("editPopup").style.display = "none";
}

function saveEdit() {
    //  valores da tabela
    const id = document.getElementById("editIdInput").value;
    const titulo = document.getElementById("editedTituloInput").value;
    const autor = document.getElementById("editedAutorInput").value;
    const data = document.getElementById("editedDataInput").value;

    // Atualiza os dados na tabela (titulo,autor,data)
    const row = [...document.querySelectorAll("#tableBody tr")].find(row => row.cells[0].innerText === String(id));
    row.cells[1].innerText = titulo;
    row.cells[2].innerText = autor;
    row.cells[3].innerText = data;

    // Oculta o popup de edição
    document.getElementById("editPopup").style.display = "none";

    // Salva os dados atualizados 
    saveToLocalStorage();
}

function saveToLocalStorage() {
    const tableData = [];
    const rows = document.querySelectorAll("#tableBody tr");
    rows.forEach(row => {
        const id = row.cells[0].innerText;
        const titulo = row.cells[1].innerText;
        const autor = row.cells[2].innerText;
        const data = row.cells[3].innerText;
        tableData.push({ id, titulo, autor, data });
    });
    localStorage.setItem("tableData", JSON.stringify(tableData));
}