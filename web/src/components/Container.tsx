import { useEffect, useState } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import { Button, ContainerArea, ContainerItem } from "../styles/Styles";
import Swal from "sweetalert2";
import Bag from "../assets/Bag.svg";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "../redux/root-reducer";
import { addProductToCart } from "../redux/Cart/action";
import { ProductsProps } from "../types/types";

export const Container = () => {
  const [products, setProducts] = useState<ProductsProps[] | [] | null>(null);
  const [t, setT] = useState(null);

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

  const dispatch = useDispatch();

  const handleGetProductClick = (product: ProductsProps) => {
    dispatch(addProductToCart(product));
    console.log(addProductToCart(product));
  };

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

              <Button onClick={() => handleGetProductClick(product)}>
                <img src={Bag} alt="" />
                COMPRAR
              </Button>
            </ContainerItem>
          );
        })}
    </ContainerArea>
  );
};
