import imagen from "../../../assets/img/imagenes.jpg";
export const Inicio = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center ">
        <div className="col-md-6">
          <div className="card border-top">
            <img src={imagen} alt="imagen" />
            <div className="card-body">
              <h3 className="card-title">Restaurante Egodrés</h3>
              <p className="card-text">
                Bienvenido al luegar donde realizar su pedido es igual de
                satisfactoria que probar nuestros platos
              </p>
              <a href="/mencre" className="btn btn-primary" >
                Realizar menú
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
