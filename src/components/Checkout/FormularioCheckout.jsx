import "./FormularioCheckout.css";

const FormularioCheckout = ({ dataForm, handleChangeinput, handleSubmit }) => {
  return (
    <div>
      <div className="container-form">
        <form className="box-form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="label">
            Nombre y apellido:
          </label>
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={dataForm.name}
            onChange={handleChangeinput}
          />

          <label htmlFor="phone" className="label">
            Telefono:
          </label>
          <input
            className="input"
            type="text"
            id="phone"
            name="phone"
            value={dataForm.phone}
            onChange={handleChangeinput}
          />

          <label htmlFor="email" className="label">
            Email:
          </label>
          <input
            className="input"
            type="text"
            id="email"
            name="email"
            value={dataForm.email}
            onChange={handleChangeinput}
          />
          <br />
          <button type="submit">Enviar orden</button>
        </form>
      </div>
    </div>
  );
};

export default FormularioCheckout;
