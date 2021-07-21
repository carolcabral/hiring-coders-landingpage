import React, { useState } from "react";
import { Button } from "../../components/Button";

interface Client {
  id: number;
  name: string;
  email: string;
  cpf: number;
  birth: string;
  contact: string;
}

function Clients() {
  var [id, setId] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCPF] = useState(0);
  const [birth, setBirth] = useState("");
  const [contact, setContact] = useState("");

  function handleSubmit(e: any) {
    e.preventDefault();
    var newClient: Client = {
      id: id,
      name: name,
      email: email,
      cpf: cpf,
      birth: birth,
      contact: contact,
    };

    localStorage.setItem("Client", JSON.stringify(newClient));
    setId(id++);
    console.log("Saved on localStorage: ", localStorage.getItem("Client"));
  }

  return (
    <>
      <Button
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        path="/clients"
      >
        Novo client
      </Button>

      <div className="form-client">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" placeholder="" />
          </label>

          <label>
            E-mail:
            <input type="email" placeholder="contato@vtex.com" />
          </label>

          <label>
            CPF:
            <input type="text" placeholder="XXX.XXX.XXX-XX" />
          </label>

          <label>
            Data de nascimento:
            <input type="date" />
          </label>

          <label>
            Número para contato
            <input type="text" placeholder="(XX) X XXXX-XXXX" />
          </label>

          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </>
  );
}

export default Clients;
