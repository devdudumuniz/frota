import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit, FaRegWindowClose } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

function Carros() {

  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (event) => {
    const row = event.target.closest("tr");
    setSelectedRow(row);
  };
  const rowData = selectedRow
    ? Array.from(selectedRow.children).map((cell) => cell.textContent)
    : [];
  console.log(rowData[1]);
  //dados de exemplos para compor a tabela
  const campos = [
    {
      id: "1",
      modelo: "Gol",
      placa: "KLM-3054",
      secretaria: "Secretaria de Saúde",
    },
    {
      id: "2",
      modelo: "Ford Ka",
      placa: "PAW-3054",
      secretaria: "Secretaria de Educação",
    },
    {
      id: "3",
      modelo: "Touro",
      placa: "PET-4477",
      secretaria: "Secretaria de Infra",
    },
  ];
  const [Escon, setEscon] = React.useState(true);

  return (
    <>
      <Card.Body
        style={{
          height: "3em",
          width: "95%",
          margin: "2% auto 0 auto",
          display: "flex",
          background: "#cfe2ff",
          color: "#3f5061",
          font: "Open Sans",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Title>Veículos e Cadastro</Card.Title>
      </Card.Body>

     {/* formulario para cadastro de nova postos */}
     <form className="formSup" action="">
          <div className="modBodyG">
            <div className="formGrupG">
              <input type="text" placeholder="Nome do Posto" />
            </div>
            <div className="formGrupG">
              <input type="text" placeholder="CNPJ" />
            </div>
            <div className="formGrupG">
              <input type="date" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>
      {/* tabela de apresentação do das secretarias */}
<div className="hidden">
      <Table
        onClick={() => setEscon(!Escon)}
        style={{  border: "1px solid #00162b" }}
        striped
        bordered
        hover
      >
        <thead>
          <tr style={{ backgroundColor: "#00162b", color: "#eaee05" }}>
            <th>Id Carro</th>
            <th>Modelo</th>
            <th>Placa</th>
            <th>Secretaria</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          {/* para apresentar os dados da tabela é só executar um loop no <tr> lembrando das classes de cada <td> */}

          {campos.map((item) => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.modelo}</td>
              <td> {item.placa}</td>
              <td> {item.secretaria}</td>
              {/*td com botoes de editar ou modificar */}
              <td className="center">
                <i>
                  <FaEdit onClick={handleClick} />
                  <BsFillTrashFill style={{ margin: "0 5px" }} />
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
</div>
      {rowData.length > 0 && (
        <form className="mod" style={{ display: Escon ? "block" : "none" }}>
          <div className="modHeader">
            <h3>Editar dados da tabela</h3>
            <FaRegWindowClose
              style={{ marginRight: "8%" }}
              className="iconClose"
              onClick={() => setEscon(!Escon)}
            />
          </div>
          <div className="lineForm"></div>
          <div className="modBody">
            <div className="formGrup">
              <label>Secretaria:</label>
              <input type="text" value={rowData[1]} />
            </div>
            <div className="formGrup">
              <label>Data da Liberação</label>
              <input type="text" value={rowData[2]} />
            </div>
            <div className="formGrup">
              <label>Valor da Liberação</label>
              <input type="text" value={rowData[3]} />
            </div>
          </div>
          <div className="lineForm"></div>
          <div className="modFooter">
            <input type="submit" />
          </div>
        </form>
      )}
    </>
  );
}
export default Carros;
