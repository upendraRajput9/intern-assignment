import * as React from "react";
import Card from "@mui/material/Card";
import { Container } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";
import { fetchCarts } from "../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.carts);
  const handleSum = (arr, name) => {
    let total = 0;
    arr.forEach((e) => {
      total += name === "amount" ? e.price : e.quantity;
    });
    return total;
  };

  useEffect(() => {
    dispatch(fetchCarts());
  }, []);

  return (
    <Container sx={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {loading && <div>Loading ...</div>}
        {!loading && error ? <div>Error:{error}</div> : null}
        {!loading &&
          data.products &&
          data.products.map((product) => (
            <Card
              key={product.id}
              sx={{ display: "flex", alignItems: "center", margin: "8px 0" }}
            >
              <div style={{ flex: "1", padding: "0 10px" }}>
                <h2>{product.title}</h2>
                <h3>Price: ${product.price}</h3>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <h4>Quantity: {product.quantity}</h4>
                  <AddIcon />
                  <RemoveIcon />
                </div>
              </div>
            </Card>
          ))}
      </div>
      <Box
        component="span"
        sx={{ p: 2, height: "50vh", flex: "1", padding: "1rem" }}
      >
        <h2> Pay</h2>
        <h3>
          Total product :{" "}
          {!loading && data.products && handleSum(data.products, "")}
        </h3>
        <h3>
          Total Amount : $
          {!loading && data.products && handleSum(data.products, "amount")}
        </h3>
        <button
          onClick={() => {
            alert(
              `YOUR AMOUNT IS PAYED $${handleSum(data.products, "amount")}`
            );
            navigate("/");
          }}
        >
          BUY
        </button>
      </Box>
    </Container>
  );
}
