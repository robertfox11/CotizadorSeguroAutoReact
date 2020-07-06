import React, { useState } from "react";
import styled from "@emotion/styled";
import Header from "./components/Header";
import Form from "./components/Form";
import Resume from "./components/Resume";
import Result from "./components/Result";

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContentForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  const [resume, saveResume] = useState({
    cotizacion: 0,
    datos: {
      marca: "",
      year: "",
      plan: "",
    },
  });

  // extraer Datos
  const { datos, cotizacion } = resume;
  return (
    <Content>
      <Header title="Cotizador de seguro" />
      <ContentForm>
        <Form saveResume={saveResume} />
        <Resume datos={datos} />
        <Result cotizacion={cotizacion} />
      </ContentForm>
    </Content>
  );
}

export default App;
