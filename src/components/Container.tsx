import { useEffect, useState } from "react";
import { Button, ContainerArea, ContainerItem } from "../styles/Styles";
import Swal from "sweetalert2";
import Bag from "../assets/Bag.svg";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/Cart/slice";
import { ProductsProps } from "../types/types";
import Loader from "../layout/Loader";

export const Container = () => {
  const [products, setProducts] = useState<ProductsProps[] | [] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      const req = await fetch(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC"
      );
      const res = await req.json();
      setIsLoading(false);

      setProducts(res.products);
    };
    fetchData();
  }, []);

  if (!products && isLoading) return <Loader />;

  const dispatch = useDispatch();

  const handleGetProductClick = (product: ProductsProps) => {
    dispatch(addProduct(product));
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
