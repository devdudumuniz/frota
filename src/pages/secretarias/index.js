import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { BsFillTrashFill } from "react-icons/bs";
import { FaRegWindowClose } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

function Secretarias() {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleClick = (event) => {
    const row = event.target.closest("tr");
    setSelectedRow(row);
  };
  const rowData = selectedRow
    ? Array.from(selectedRow.children).map((cell) => cell.textContent)
    : [];
  //dados de exemplos para compor a tabela
  const campos = [
    {
      id: "1",
      secretaria: "Saúde",
      dataLib: "25/12/2022",
      valorLib: "255.000",
      saldoAnter: "200.000",
      valorT: "455.000",
      valorUti: "55.000",
      saldoAtu: "455.000",
    },
    {
      id: "2",
      secretaria: "Educação",
      dataLib: "25/12/2022",
      valorLib: "255.000",
      saldoAnter: "200.000",
      valorT: "255.000",
      valorUti: "255.000",
      saldoAtu: "255.000",
    },
    {
      id: "3",
      secretaria: "Infraestrutura",
      dataLib: "25/12/2022",
      valorLib: "255.000",
      saldoAnter: "200.000",
      valorT: "255.000",
      valorUti: "255.000",
      saldoAtu: "255.000",
    },
  ];
  const [Escon, setEscon] = React.useState(true);

  return (
    <>
      {/* Titulo da pagina */}
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
        <Card.Title>Secretarias</Card.Title>
      </Card.Body>
      {/* Fim do titulo */}

      {/* formulario para cadastro de nova postos */}
      <form className="formSup" action="">
          <div className="modBodyG">
            <div className="formGrupG">
              <input type="text" placeholder="Nome Secretaria" />
            </div>
            <div className="formGrupG">
              <input type="text" placeholder="Informações Adicionais" />
            </div>
            <div className="formGrupG">
              <input type="text" placeholder="Informações Adicionais" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>
      {/* tabela de apresentação do das secretarias */}
<div className="hidden">
<Table
        className="tabelaMobile"
        style={{ border: "1px solid #00162b" }}
        striped
        bordered
        hover
        onClick={() => setEscon(!Escon)}
      >
        {/* cabeçalho da tabela */}
        <thead>
          <tr style={{ border: "#022f5a8f",backgroundColor: "#00162b", color: "#eaee05" }}>
            <th>Id</th>
            <th>Secretaria</th>
            <th>Data liberação</th>
            <th>Valor liberado</th>
            <th>Saldo anterior</th>
            <th>Valor total</th>
            <th>Valor utilizado</th>
            <th>Saldo atual</th>
            <th>Opções</th>
          </tr>
        </thead>
        {/* corpo da tabela */}
        <tbody>
          {/* para apresentar os dados da tabela é só executar um loop no <tr> lembrando das classes de cada <td> */}

          {campos.map((item) => (
            <tr key={item.id}>
              <td> {item.id}</td>
              <td> {item.secretaria}</td>
              <td> {item.dataLib}</td>
              <td> {item.valorLib}</td>
              <td> {item.saldoAnter}</td>
              <td> {item.valorT}</td>
              <td> {item.valorUti}</td>
              <td> {item.saldoAtu}</td>
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
            <div className="formGrup">
              <label>Saldo Anterior Lançado</label>
              <input type="text" value={rowData[4]} />
            </div>
            <div className="formGrup">
              <label>Valor Total</label>
              <input type="text" value={rowData[5]} />
            </div>
            <div className="formGrup">
              <label>Valor Utilizado</label>
              <input type="text" value={rowData[6]} />
            </div>
            <div className="formGrup">
              <label>Saldo Atual</label>
              <input type="text" value={rowData[7]} />
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

export default Secretarias;
