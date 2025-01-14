const lagretProduktId = localStorage.getItem('selectedProductId');

// Referanse til tabellens tbody
const tableBody = document.getElementById('productTableBody');

// Legg til produkt-ID i tabellen hvis den finnes
if (lagretProduktId) {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.innerText = lagretProduktId;
    row.appendChild(cell);
    tableBody.appendChild(row);
} else {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.innerText = "Ingen produkt-ID lagret.";
    row.appendChild(cell);
    tableBody.appendChild(row);
}