import React, { useState } from "react";
import styled from "@emotion/styled";
import { getDiferenciaYear } from "../Helpers";
const CampoDiv = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
const Label = styled.label`
  flex: 0 0 100px;
`;
const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearence: none;
`;
const InputRadio = styled.input`
  margin: 0 1rem;
`;
const Btn = styled.button`
  background-color: #00838f;
  font-size: 16px;
  width: 100%;
  padding: 1rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  transition: background-color 0.3s ease;
  margin-top: 2rem;
  &:hover {
    background-color: #26c6da;
    cursor: pointer;
  }
`;
const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
`;
const Form = () => {
  //validando datos con error
  const [error, saveError] = useState(false);

  //guardando datos en un string vacio con variables separadas
  const [datos, saveDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });
  //Extraer los valores del state
  const { marca, year, plan } = datos;
  //Leer datos del formulario y guardarlo en el state en un objeto
  const getInformation = (e) => {
    saveDatos({ ...datos, [e.target.name]: e.target.value });
  };
  const cotizarSeguro = (e) => {
    e.preventDefault();
    if (marca.trim() === "" || year.trim() === "" || plan.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    // la base de 2000
    let result = 2000;
    //Obterner la diferencia en años
    const difer = getDiferenciaYear(year);

    // por cada año hay que restar el 3%
    result -= (difer * 3 * result) / 100;
    console.log(result);

    console.log(difer);
  };

  return (
    <form onSubmit={cotizarSeguro}>
      {error ? <Error message="Todos los Campos son obligatorios" /> : null}
      <CampoDiv>
        <Label>Marca</Label>
        <Select name="marca" value={marca} onChange={getInformation}>
          <option value="">---Seleccione----</option>
          <option value="americano">Americano</option>
          <option value="europeo">Europeo</option>
          <option value="asiatico">Asiatico</option>
        </Select>
      </CampoDiv>
      <CampoDiv>
        <Label>Año</Label>
        <Select name="year" value={year} onChange={getInformation}>
          <option value="">-- Seleccione --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </CampoDiv>
      <CampoDiv>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basico"
          checked={plan === "basico"}
          onChange={getInformation}
        />
        Básico
        <InputRadio
          type="radio"
          name="plan"
          value="completo"
          checked={plan === "completo"}
          onChange={getInformation}
        />
        Completo
      </CampoDiv>
      <Btn type="submit">Cotizar</Btn>
    </form>
  );
};

export default Form;
