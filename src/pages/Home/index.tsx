import React from "react";
import { Button } from "../../components/Button";

function Home() {
  return (
    <>
      <Button
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        path="/clients"
      >
        Clientes
      </Button>
      <Button
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        path="/products"
      >
        Produtos
      </Button>
    </>
  );
}

export default Home;
