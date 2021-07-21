import React, { useState } from "react";
import { Button } from "../../components/Button";

//TODO: states para cada input?
//TODO: melhorar id

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

function Products() {
  var [id, setId] = useState(0);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  function handleSubmit(e: any) {
    e.preventDefault();
    var newProduct: Product = {
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
    };

    localStorage.setItem("Product", JSON.stringify(newProduct));
    setId(id++);
    console.log("Saved on localStorage: ", localStorage.getItem("Product"));
  }

  return (
    <>
      <Button
        buttonStyle="btn--primary"
        buttonSize="btn--large"
        path="/products"
      >
        Novo produto
      </Button>

      <div className="form-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label>
            Descrição:
            <input
              type="text"
              placeholder="Descrição do produto"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label>
            Preço
            <input
              type="number"
              placeholder="R$"
              value={price}
              onChange={(e) => setPrice(parseInt(e.target.value))}
            />
          </label>

          <label>
            Quantidade em estoque
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
          </label>

          <input type="submit" value="Cadastrar" />
        </form>
      </div>
    </>
  );
}

export default Products;
