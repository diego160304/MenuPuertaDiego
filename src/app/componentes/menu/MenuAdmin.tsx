export const MenuAdmin = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th style={{ width: "5%" }}>#</th>
                <th style={{ width: "25%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Acompañante</th>
                <th style={{ width: "10%" }}>Precio</th>
                <th style={{ width: "10%" }}>Región</th>
                <th style={{ width: "30%" }}>Opciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Bandeja Paisa</td>
                <td>Con Aguacate</td>
                <td>$35.000</td>
                <td>Paisa</td>
                <td>
                  <a href="/menactu/:1">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#041666" }}
                    ></i>{" "}
                    Edit{" "}
                  </a>
                  &nbsp;
                  <a href="">
                    <i
                      className="fa-solid fa-eraser"
                      style={{ color: "#04762d" }}
                    ></i>{" "}
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ajiaco</td>
                <td>Con Arroz</td>
                <td>$28.000</td>
                <td>Andina</td>
                <td>
                <a href="/menactu/:1">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#041666" }}
                    ></i>{" "}
                    Edit{" "}
                  </a>
                  &nbsp;
                  <a href="">
                    <i
                      className="fa-solid fa-eraser"
                      style={{ color: "#04762d" }}
                    ></i>{" "}
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Mute Santandereano</td>
                <td>Con Arroz</td>
                <td>$25.000</td>
                <td>Santander</td>
                <td>
                <a href="/menactu/:1">
                    <i
                      className="fa-solid fa-pen-to-square"
                      style={{ color: "#041666" }}
                    ></i>{" "}
                    Edit{" "}
                  </a>
                  &nbsp;
                  <a href="">
                    <i
                      className="fa-solid fa-eraser"
                      style={{ color: "#04762d" }}
                    ></i>{" "}
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
