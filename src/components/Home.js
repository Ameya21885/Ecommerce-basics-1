import React, { useContext, useState } from "react";
import { faker } from "@faker-js/faker";
import SingleProduct from "./SingleProduct";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {Cart} from "../context/Context";


faker.seed(20);


const Home = () => {
  //  const {cart, setCart}= useContext(Cart)
  console.log(useContext(Cart));

  const productsArray = [...Array(20)].map(() => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.abstract(),
  }));
  console.log(productsArray);

  const [products] = useState(productsArray);

  return (
    <div style={{ padding: '1rem'}}>
      {/* Home */}
      <Box sx={{ flexGrow: 1 }} >
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {products.map((prod) => (
            <>
              <Grid item xs={2} sm={4} md={4} key={prod.id}>
                <SingleProduct prod={prod} key={prod.id} />
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
