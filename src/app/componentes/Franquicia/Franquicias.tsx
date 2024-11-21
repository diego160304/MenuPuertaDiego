import imagen from "../../../assets/img/imagenes.jpg";

export const Franquicias = () => {
  return (
    <div className="pt-5 d-flex justify-content-center ">
    <div className="col-md-6">
      <div className="card border-top">
        <img src={imagen} alt="imagen" />
        <div className="card-body">
          <h3 className="card-title">Restaurante En Cali</h3>
          <p className="card-text">
            Tenemos restaurantes distribuidos a nivel nacional.
          </p>
          <a href="/menuacer" className="btn btn-primary" >
            Más de nosotros.
          </a>
        </div>
      </div>
    </div>
  </div>
  );
};
