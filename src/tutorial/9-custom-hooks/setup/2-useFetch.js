import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);

  const getProducts = async () => {
    const response = await fetch(url);
    if (response.status < 200 || response.status > 299) {
      setIsError(true);
    }
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
  console.log(products);

  return { loading, products, isError };
};
