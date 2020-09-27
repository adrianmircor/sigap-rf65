import React from "react";
import "../App.css";

//Importanto el Context, que es quien comparte el initialState y funciones a los de+

class CursoMatriculado extends React.Component {
  render() {
    const formatoPeriodo = (periodo, posicion) => {
      return periodo.slice(0, posicion) + "-" + periodo.slice(posicion);
    };

    const creditoTotalSegunTipo = (tipo) => {
      let total = 0;
      this.props.historial.map((data) => {
        if (data.tipoCurso === tipo) {
          total += data.numeroCreditos;
        }
      });

      return total;
    };

    console.log("?VALOR", this.props.historial);
    console.log("?VALOR", this.props.periodos);
    return (
      <div>
        <div className="tableScrollHV">
          <h6 align="center">
            <b>Detalle de Matricula:</b>
          </h6>
          <div>
            {this.props.periodos.map((periodo, key) => (
              <div>
                <div>
                  <p>Asignatura Semestral: {formatoPeriodo(periodo, 4)} </p>
                  <table className="">
                    <thead>
                      <tr key={key}>
                        <th className="th">Plan de Estudio</th>
                        <th className="th">CICLO</th>
                        <th className="th">Codigo Asignatura</th>
                        <th className="th">Nombre Asignatura</th>
                        <th className="th">Tipo de Curso</th>
                        <th className="th">N° Creditos</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.props.historial.map((data, key) => {
                        return periodo === data.codigoSemestre ? (
                          <tr key={key}>
                            <td className="td">{data.planEstudio}</td>
                            <td className="td">{data.ciclo}</td>
                            <td className="td">{data.codigoAsignatura}</td>
                            <td className="td">{data.nombreCurso}</td>
                            <td className="td">{data.tipoCurso}</td>
                            <td className="td">{data.numeroCreditos}</td>
                          </tr>
                        ) : (
                          <div></div>
                        );
                      })}
                    </tbody>
                  </table>

                  <div className="cajita"></div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p>Creditos Obligatorios : {creditoTotalSegunTipo("O")}</p>
          </div>
          <div>
            <p>Creditos Electivos    : {creditoTotalSegunTipo("E")}</p>
          </div>
        </div>
        {/* {this.props.historial.map((data, key) => (
          <p>{data.planEstudio}</p>
        ))} */}
      </div>
    );
  }
}

export default CursoMatriculado;
