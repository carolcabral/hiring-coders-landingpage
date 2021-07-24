import React, { useState } from "react";
import { Button } from "../../components/Button";
import "../../css/Form.css";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

function Products() {
  const [product, setProduct] = useState<Product>({
    id: 0,
    name: "",
    description: "",
    price: 0,
    quantity: 0,
  });

  const [toggle, setToggle] = useState(false);

  function handleChange(e: any) {
    const value = e.target.value;
    setProduct({
      ...product,
      [e.target.name]: value,
    });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    var newProduct: Product = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    };

    localStorage.setItem("Product", JSON.stringify(newProduct));
    setProduct({ ...product, id: product.id + 1 });
    console.log("Saved on localStorage: ", localStorage.getItem("Product"));
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
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              path="/products"
              onClick={handleClick}
              icon="fas fa-plus"
            >
              Novo produto
            </Button>
          </div>
        )}

        {toggle && (
          <div className="form-product form-box">
            <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input
                  type="text"
                  name="name"
                  value={product.name}
                  onChange={handleChange}
                  placeholder=""
                />
              </label>

              <label>
                Descrição:
                <input
                  type="text"
                  name="description"
                  placeholder="Descrição do produto"
                  value={product.description}
                  onChange={handleChange}
                />
              </label>

              <label>
                Preço
                <input
                  type="number"
                  name="price"
                  placeholder="R$"
                  value={product.price}
                  onChange={handleChange}
                />
              </label>

              <label>
                Quantidade em estoque
                <input
                  type="number"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
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

export default Products;
