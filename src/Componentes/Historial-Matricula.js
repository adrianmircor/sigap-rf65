import CONFIG from "../Configuracion/Config";
import React, { useState, useEffect } from "react";
import CursoMatriculado from "./CursoMatriculado";
import "../App.css";

//Importanto el Context, que es quien comparte el initialState y funciones a los de+

class HistorialMatricula extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historialMatricula: [],
      periodounico: [],
    };
  }

  componentWillMount() {
    /*AMC */
    console.log("Este codigo ", this.props.codAlu);
    fetch(CONFIG + "matricula/listar-historial/" + this.props.codAlu)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          historialMatricula: data,
        });

        console.log("mira>", this.state.historialMatricula);
        let periodosAcademicos = [];

        this.state.historialMatricula.map((data, key) =>
          periodosAcademicos.push(data.codigoSemestre)
        );

        let periodosAcademicosUnicos = periodosAcademicos.filter(
          (data, index) => periodosAcademicos.indexOf(data) === index
        );

        console.log("AQUIIIIII ", periodosAcademicos);
        console.log("AQUIIIIII2 ", periodosAcademicosUnicos);
        this.setState({
          periodounico: periodosAcademicosUnicos,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if (this.state.historialMatricula.length > 0) {
      return (
        <div className="">
          <CursoMatriculado 
            historial={this.state.historialMatricula}
            periodos={this.state.periodounico}></CursoMatriculado>;
        </div>
      );
    } else {
      return <p>No tiene registro</p>;
    }
  }
}

export default HistorialMatricula;
