import * as React from "react";

import { Grid } from "@mui/material";
import ProductCard from "./product-card";

function Products() {
  return (
    <>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
      <Grid item>
        <ProductCard />
      </Grid>
    </>
  );
}

export default React.memo(Products);
