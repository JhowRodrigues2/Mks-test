import { useEffect, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import { Button, ContainerArea, ContainerItem } from "../styles/Styles";
import Swal from "sweetalert2";
import Bag from "../assets/Bag.svg";
type ProductsProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
};

export const Container = () => {
  const [products, setProducts] = useState<ProductsProps[] | [] | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const req = await fetch(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      const res = await req.json();
      setProducts(res.products);
    };
    fetchData();
  }, []);
  return (
    <ContainerArea>
      {products &&
        products.map((product) => {
          return (
            <ContainerItem key={product.id}>
              <img
                src={product.photo}
                alt=""
                onClick={() => {
                  {
                    Swal.fire({
                      title: `${product.name}`,
                      text: `${product.description}`,
                      imageUrl: `${product.photo}`,
                      imageWidth: 400,
                      imageHeight: 200,
                      imageAlt: "Custom image",
                    });
                  }
                }}
              ></img>
              <span>
                <h1>{product.name}</h1>
                <p>R${Math.round(product.price)}</p>
              </span>
              <p>Redesigned from scratch and completely revised.</p>
              <Button>
                <img src={Bag} alt="" />
                COMPRAR
              </Button>
            </ContainerItem>
          );
        })}
    </ContainerArea>
  );
};
