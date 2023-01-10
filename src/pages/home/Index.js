import React from "react";
import { Chart } from "react-google-charts";
import Card from "react-bootstrap/Card";

function exten() {
  //dados do gráfico Bars
  const data = [
    //para adicionar mais secretarias e resultados é só seguir o poadrão e acrescentar dentro do array
    [
      "Mês",
      "Secretaria de Saúde",
      "Secretaria de Educação",
      "Secretaria de Infraestrutura",
    ],
    ["Out", 100, 400, 200], //mês de outubro das Secretarias listadas acima
    ["Nov", 1170, 460, 250], //mês de novembro das Secretarias listadas acima
    ["Dez", 660, 1120, 300], //mês de dezembro das Secretarias listadas acima
    ["Jan", 100, 100, 200], //mês de Janeiro das Secretarias listadas acima
  ];
  //titulos do grafico
  const options = {
    chart: {
      title: "Acompanhar Performance",
      subtitle: "Análise de dados comparativos anuais",
    },
  };

  //dados do gráfico pizza
  const dataa = [
    //grafico para definir qual secretaria é a líder em gastos mensais
    ["Pizza", "Gráficos"],
    ["Secretaria de Saúde", 30],
    ["Secretaria de Educação", 23],
    ["Secretaria de Infraestrutura", 22],
    ["Outros", 25], // Below limit.
  ];
  //titulos do gráfico
  const optionss = {
    title: "Grafico para definir qual secretaria é a líder em gastos mensais",
    sliceVisibilityThreshold: 0.2, // 20%
  };

  return (
    <div
      style={{
        background: "#fff",
      }}
    >
      {/* Titulo da pagina 1 */}
      <Card.Body
        style={{
          height: "3em",
          width: "95%",
          margin: "2% auto 3% auto",
          display: "flex",
          background: "#94EC94",
          color: "#3f5061",
          font: "Open Sans",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card.Title>Gráficos de Destribuição</Card.Title>
      </Card.Body>
      {/* Fim do titulo */}
      {/* Gráficos de barra para desempenho de mais gastos */}
      <div
        style={{
          margin: "auto",
        }}
        id="center1"
      >
        <Chart
          style={{
            margin: "auto",
          }}
          chartType="Bar"
          width="97.5%"
          height="300px"
          data={data}
          options={options}
        />
      </div>

      {/* Gráficos pizza para desempenho de mais gastos */}
      <div id="center2">
        <Card.Body
          style={{
            height: "3em",
            width: "95%",
            margin: "2% auto 3% auto",
            display: "flex",
            background: "#94EC94",
            color: "#3f5061",
            font: "Open Sans",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card.Title>Gráficos para controle de gastos</Card.Title>
        </Card.Body>
        <Chart
          style={{
            margin: "auto",
          }}
          chartType="PieChart"
          data={dataa}
          options={optionss}
          width={"100%"}
          height={"300px"}
        />
      </div>
    </div>
  );
}
export default exten;
