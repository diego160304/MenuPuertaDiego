import { useState } from "react";
import { Plato } from "../../modelos/Plato";
import { ARREGLO_PLATOS } from "../../mocks/Plato-mocks";
import { ARREGLO_PLATOS_REGION } from "../../utilidades/rutas/Dominios/DomRegion";

export const MenuListar = () => {
  const [arrPlatos] = useState<Plato[]>(ARREGLO_PLATOS);
  const obtenerNombre = (Valor: string) => {
    for (const objRegion of ARREGLO_PLATOS_REGION) {
      if (objRegion.codRegion == Valor) {
        return objRegion.nombreRegion;
      }
    }
  };
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Precio</th>
                <th style={{ width: "20%" }}>Región</th>
                <th style={{ width: "20%" }}>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {arrPlatos.map((miPlat: Plato) => (
                <tr>
                  <td>{miPlat.codPlato}</td>
                  <td>{miPlat.nombrePlato}</td>
                  <td>{miPlat.precioPlato}</td>
                  <td>{obtenerNombre(miPlat.regionPlato)}</td>
                  <td>
                    <img
                      src={miPlat.imagenPlatoBase64}
                      alt=""
                      className="imagenListado"
                    />
                    <br />
                    {miPlat.imagenPLato}
                  </td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
