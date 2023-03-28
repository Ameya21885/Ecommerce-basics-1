import React, { useContext } from "react";
import {Cart} from "../context/Context";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useContext(Cart);

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
      

        <CardMedia
          sx={{ height: 140 }}
          image={prod.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {prod.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Price: {prod.price.substring(0, 3)}
          </Typography>
        </CardContent>

        <CardActions>
          {cart.includes(prod) ? (
            <Button
              size="small"
              onClick={() => {
                setCart(cart.filter((c) => c.id !== prod.id));
              }}
            >
              Remove From Cart
            </Button>
          ) : (
            <Button
              size="small"
              onClick={() => {
                setCart([...cart, prod]);
              }}
            >
              Add to Cart
            </Button>
          )}
        </CardActions>
      </Card>
    </div>
  );
};

export default SingleProduct;
