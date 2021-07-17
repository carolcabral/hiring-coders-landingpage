import React, { useState } from "react";
import { Button } from "../Button";
import "./EmailForm.css";

// TODO: Validar campo email

function EmailForm() {
  const [email, setEmail] = useState("");

  function handleEmailForm() {
    localStorage.setItem("email", email);
    console.log("Saved on localStorage: ", localStorage.getItem("email"));
  }
  return (
    <>
      <form className="form-wrapper">
        <p>Cadastre seu e-mail e não fique fora dessa!</p>
        <input
          className="form-input"
          type="email"
          value={email}
          placeholder="Enter your e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button buttonStyle="btn--primary" onClick={handleEmailForm}>
          Subscribe
        </Button>
      </form>
    </>
  );
}

export default EmailForm;
