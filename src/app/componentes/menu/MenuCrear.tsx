export const MenuCrear = () => {
  return (
    <>
      <div className="pt-5 d-flex justify-content-center">
        <div className="col-md-6">
          <form className="row g-3 needs-validation">
            <div className="col-md-6">
              <label htmlFor="nomb" className="form-label">
                Nombre plato
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="nomb"
                name="nomb"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="acomp" className="form-label">
                Acompañamiento
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="acomp"
                name="acomp"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom03" className="form-label">
                Precio
              </label>
              <input
                type="text"
                className="form-control border-info"
                id="validationCustom03"
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="regi" className="form-label">
                Region
              </label>
              <select
                className="form-select border-info"
                id="regi"
                name="regi"
                required
              >
                <option selected disabled value="">
                  Seleccione la región...
                </option>
                <option>Andina</option>
                <option>Caribe</option>
                <option>Pacífico</option>
                <option>Orinoquia</option>
                <option>Amazonía</option>
              </select>
            </div>

            <div className="col-12">
              <button className="btn btn-primary " type="submit">
                Registrar plato
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
