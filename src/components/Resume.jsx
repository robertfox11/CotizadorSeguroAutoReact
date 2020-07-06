import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { primeraMayuscula } from "../Helpers";
const ContenResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`;
const Resume = ({ datos }) => {
  //Extraer de datos
  const { marca, year, plan } = datos;
  if (marca === "" || year === "" || plan === "") return null;
  return (
    <ContenResume>
      <h2>Resume de Cotizacion</h2>
      <ul>
        <li>Marca:{primeraMayuscula(marca)}</li>
        <li>Year:{year}</li>
        <li>Plan:{primeraMayuscula(plan)}</li>
      </ul>
    </ContenResume>
  );
};

export default Resume;
