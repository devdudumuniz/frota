import React from "react";
import Table from "react-bootstrap/Table";
import { BsFillTrashFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

function Gasolina() {
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
        <Card.Title>Cadastro de Limites</Card.Title>
      </Card.Body>

     {/* formulario para cadastro de nova postos */}
     <form className="formSup" action="">
          <div className="modBodyG">
            <div className="formGrupG">
              <input type="text" placeholder="Secretaria" />
            </div>
            <div className="formGrupG">
              <input type="text" placeholder="Data da Liberação" />
            </div>
            <div className="formGrupG">
              <input type="number" placeholder="Valor a ser liberado" />
            </div>
            <div className="modFooterG">
            <input type="submit" />
          </div>
            </div>
           
      </form>
      {/* tabela de apresentação do das secretarias */}
<div className="hidden">
      <Table style={{ border: "1px solid #00162b" }} striped bordered hover>
        <thead>
          <tr style={{ backgroundColor: "#00162b", color: "#eaee05" }}>
            <th>Secretaria</th>
            <th>Data Liberação</th>
            <th>Valor Liberado</th>
            <th>Saldo Anterior</th>
            <th>Valor Total</th>
            <th>Valor Utilizado</th>
            <th>Saldo Atual</th>
            <th>Opções</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Administração</td>
            <td>25/04/2022</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td className="center">
              <i>
                <FaEdit />
                <BsFillTrashFill style={{ margin: "0 5px" }} />
              </i>
            </td>
          </tr>
          
          <tr>
            <td>Saúde</td>
            <td>25/04/2022</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td className="center">
              <i>
                <FaEdit />
                <BsFillTrashFill style={{ margin: "0 5px" }} />
              </i>
            </td>
          </tr>
          <tr>
            <td>Educação</td>
            <td>26/04/2022</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td>R$20.000,00</td>
            <td className="center">
              <i>
                <FaEdit />
                <BsFillTrashFill style={{ margin: "0 5px" }} />
              </i>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    </>
  );
}
export default Gasolina;
