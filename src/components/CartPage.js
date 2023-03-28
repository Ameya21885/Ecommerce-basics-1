import React, { useContext, useState, useEffect } from "react";
import {Cart} from "../context/Context";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import SingleProduct from "./SingleProduct";

const CartPage = () => {
  const { cart}  = useContext(Cart);

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    My Cart
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total: Rs.{total}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ maxWidth: "100%" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Total No. of products:
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {cart.length}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>

<Box>
{cart.map((prod) => (
        <>
          <SingleProduct prod={prod} key={prod.id} />
        </>
      ))}
</Box>
      
    </div>
  );
};

export default CartPage;
