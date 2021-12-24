function importJSON() {
  const file = document.getElementById("fileHandler").files[0];

  var reader = new FileReader();
    reader.onload = function() {
      var contents = JSON.parse(reader.result);
      showMenu(contents);
    };
    reader.readAsText(file); 
}

function showMenu(contents) {
    const table = document.createElement("table");
    for (item of contents.edieni) {
      const row = document.createElement("tr");
      const cell_name = document.createElement("td");
      var name = JSON.stringify(item.nosaukums);
      name = name.replaceAll('"', '');
      cell_name.innerHTML = name;
      const cell_price = document.createElement("td");
      var price = "€ "+JSON.stringify(item.cena);
      price = price.replaceAll('"', '');
      cell_price.innerHTML = price;
      row.append(cell_name, cell_price);
      table.appendChild(row);
      document.body.appendChild(table);
    }
}