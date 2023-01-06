import React from "react";


function tableCapt(coluna1,coluna2,coluna3,coluna4,coluna5,coluna7){
    const [selectedRow, setSelectedRow] = useState(null);

    const handleClick = (event) => {
      const row = event.target.closest('tr');
      setSelectedRow(row);
      
    };
    const rowData = selectedRow
      ? Array.from(selectedRow.children).map((cell) => cell.textContent)
      : [];
}