import React, { useState } from "react";
import axios from "axios";

const CLEAR_FORM = {
  username: "",
  name: "",
  email: "",
  city: "",
};

function Form() {
  const [formState, setFormState] = useState(CLEAR_FORM);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.id]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://626bd539e5274e6664d24112.mockapi.io/front-test/v1/user",
        formState
      )
      .then((res) => {
        console.log(res);
        setFormState(CLEAR_FORM);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit}>
        <h4>Cadastre-se</h4>
        <div className="form-box">
          <div className="input-box">
            <input
              onChange={(e) => handleChange(e)}
              id="username"
              value={formState.username}
              type="text"
              placeholder="Username"
            ></input>
          </div>
          <div className="input-box">
            <input
              onChange={(e) => handleChange(e)}
              id="name"
              value={formState.name}
              type="text"
              placeholder="Nome Completo"
            ></input>
          </div>
          <div className="input-box">
            <input
              onChange={(e) => handleChange(e)}
              id="email"
              value={formState.email}
              type="text"
              placeholder="E-mail"
            ></input>
          </div>
          <div className="input-box">
            <input
              onChange={(e) => handleChange(e)}
              id="city"
              value={formState.city}
              type="text"
              placeholder="Cidade"
            ></input>
          </div>
          <div className="radio-wrapper">
            <p>DIAS DA SEMANA</p>
            <label>
              <input type="radio"></input>
              Seg
            </label>
            <label>
              <input type="radio"></input>
              Ter
            </label>
            <label>
              <input type="radio"></input>
              Qua
            </label>
            <label>
              <input type="radio"></input>
              Qui
            </label>
            <label>
              <input type="radio"></input>
              Sex
            </label>
            <label>
              <input type="radio"></input>
              Sab
            </label>
            <label>
              <input type="radio"></input>
              Dom
            </label>
          </div>
        </div>
        <div className="form-buttons">
          <button className="register-button" type="submit">
            Registrar
          </button>
          <button
            onClick={(e) => setFormState(CLEAR_FORM)}
            className="cancel-button"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
