import React from "react";
import { Button } from "../../components/Button";
import "../../css/Home.css";

function Home() {
  return (
    <>
      <div className="home-container">
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/clients"
        >
          Clientes
        </Button>

        <br />

        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          path="/products"
        >
          Produtos
        </Button>
      </div>
    </>
  );
}

export default Home;
