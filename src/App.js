import React from "react";
import Header from "./components/Header";
import styled from "@emotion/styled";

const Content = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContentForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;
function App() {
  return (
    <Content>
      <Header title="Cotizador de seguro" />
      <ContentForm></ContentForm>
    </Content>
  );
}

export default App;
