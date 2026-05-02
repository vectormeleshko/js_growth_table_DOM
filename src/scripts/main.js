'use strict';

const appendRow = document.querySelector('.append-row');
const removeRow = document.querySelector('.remove-row');
const appendCol = document.querySelector('.append-column');
const removeCol = document.querySelector('.remove-column');
const table = document.querySelector('table');

function checkTable() {
  const rowsCount = table.rows.length;
  const colsCount = table.rows[0].cells.length;

  appendRow.disabled = rowsCount === 10;
  removeRow.disabled = rowsCount === 2;

  appendCol.disabled = colsCount === 10;
  removeCol.disabled = colsCount === 2;
}

appendRow.addEventListener('click', () => {
  if (table.rows.length < 10) {
    const newRow = table.insertRow();

    for (let i = 0; i < table.rows[0].cells.length; i++) {
      newRow.insertCell();
    }
    checkTable();
  }
});

removeRow.addEventListener('click', () => {
  if (table.rows.length > 2) {
    table.deleteRow(-1);
    checkTable();
  }
});

appendCol.addEventListener('click', () => {
  if (table.rows[0].cells.length < 10) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].insertCell();
    }
    checkTable();
  }
});

removeCol.addEventListener('click', () => {
  if (table.rows[0].cells.length > 2) {
    for (let i = 0; i < table.rows.length; i++) {
      table.rows[i].deleteCell(-1);
    }
    checkTable();
  }
});

checkTable();
