import React, { useEffect } from "react";
import ShoppingItem from "../../components/ShoppingItem";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../actions/productActions";
import SpinnerAbsolute from "../../components/SpinnerAbsolute";
import { motion } from "framer-motion";
const Shop = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <SpinnerAbsolute />
      ) : error ? (
        <h3>Error</h3>
      ) : (
        <motion.div className="shop m-Container" exit={{ opacity: 0 }}>
          {products.map((product) => {
            return <ShoppingItem product={product}></ShoppingItem>;
          })}
        </motion.div>
      )}
    </>
  );
};

export default Shop;
