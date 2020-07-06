import React from "react";
import styled from "@emotion/styled";
const Mensaje = styled.p`
  background-color: rgb(127, 224, 237);
  margin-top: 2rem;
  padding: 1rem;
  text-align: center;
`;
const ResultCotizacion = styled.div`
  text-align: center;
  padding: 0.5rem;
  color: white;
  border: 1px solid #26c6da;
  background-color: rgb(127, 224, 237);
  margin-top: 1rem;
  position: relative;
`;
const TextCotizacion = styled.p`
  color: #00838f;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  margin: 0;
`;
const Result = ({ cotizacion }) => {
  return cotizacion === 0 ? (
    <Mensaje>Elige el año, la marca y el plan</Mensaje>
  ) : (
    <ResultCotizacion>
      <TextCotizacion>El total es : $ {cotizacion}</TextCotizacion>
    </ResultCotizacion>
  );
};

export default Result;
