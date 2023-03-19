import React, { useEffect } from "react";
import Product from "./Product";
import { Grid } from "@mui/material";
import { fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

const Posts = () => {
  const dispatch = useDispatch();
  const { loading, error, data, search } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts(search));
  }, [search]);

  return (
    <Grid
      container
      justifyContent="center"
      padding="2rem"
      paddingTop="6rem"
      gap={2}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      {loading && <div>Loading ...</div>}
      {!loading && error ? <div>Error:{error}</div> : null}
      {!loading &&
        data.map((product) => <Product key={product.id} {...product} />)}
    </Grid>
  );
};

export default Posts;
