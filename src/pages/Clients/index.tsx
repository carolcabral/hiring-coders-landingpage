import React, { useState } from "react";
import { Button } from "../../components/Button";
import "../../css/Form.css";

interface Client {
  id: number;
  name: string;
  email: string;
  cpf: number;
  birth: string;
  contact: string;
}

function Clients() {
  var [client, setClient] = useState<Client>({
    id: 0,
    name: "",
    email: "",
    cpf: 0,
    birth: "",
    contact: "",
  });

  const [toggle, setToggle] = useState(false);

  function handleChange(e: any) {
    const value = e.target.value;
    setClient({
      ...client,
      [e.target.name]: value,
    });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    var newClient: Client = {
      id: client.id,
      name: client.name,
      email: client.email,
      cpf: client.cpf,
      birth: client.birth,
      contact: client.contact,
    };

    localStorage.setItem("Client", JSON.stringify(newClient));
    setClient({ ...client, id: client.id + 1 });
    console.log("Saved on localStorage: ", localStorage.getItem("Client"));
    setToggle(false);
  }

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <>
      <div className="container">
        {!toggle && (
          <div className="container-button">
            <Button
              buttonStyle="btn--secondary"
              buttonSize="btn--large"
              path="/clients"
              onClick={handleClick}
              icon="fas fa-plus"
            >
              Novo client
            </Button>
          </div>
        )}

        {toggle && (
          <div className="form-client form-box">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={client.name}
                  onChange={handleChange}
                  placeholder=""
                />
              </label>

              <label>
                E-mail:
                <input
                  type="email"
                  name="email"
                  value={client.email}
                  onChange={handleChange}
                  placeholder="contato@vtex.com"
                />
              </label>

              <label>
                CPF:
                <input
                  type="text"
                  name="cpf"
                  value={client.cpf}
                  onChange={handleChange}
                  placeholder="XXX.XXX.XXX-XX"
                />
              </label>

              <label>
                Data de nascimento:
                <input
                  type="date"
                  name="birth"
                  value={client.birth}
                  onChange={handleChange}
                />
              </label>

              <label>
                Número para contato
                <input
                  type="text"
                  name="contact"
                  value={client.contact}
                  onChange={handleChange}
                  placeholder="(XX) X XXXX-XXXX"
                />
              </label>

              <input type="submit" value="Cadastrar" />
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Clients;
