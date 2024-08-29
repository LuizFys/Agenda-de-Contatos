document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorDiv = document.getElementById('error');

    // Validação simples para telefone
    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(phone)) {
        errorDiv.textContent = 'Telefone deve ter 10 ou 11 dígitos.';
        return;
    } else {
        errorDiv.textContent = '';
    }

    // Cria uma nova linha na tabela
    const tableBody = document.getElementById('contactTable').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    newRow.classList.add('fade-in');

    // Cria as células e insere os valores
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = name;
    cell2.textContent = phone;

    // Cria e adiciona o botão de exclusão
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(newRow);
    });
    cell3.appendChild(deleteButton);

    // Limpa os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
});
