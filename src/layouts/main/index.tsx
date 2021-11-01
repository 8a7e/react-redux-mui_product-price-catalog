import * as React from "react";

import { Container, CssBaseline, Grid } from "@mui/material";

import Navbar from "../../components/navbar";

interface Props {
  children: React.ReactNode;
}

function MainLayout({ children }: Props) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Container>
        <Grid justifyContent="center" container xs={12} mt={1} spacing={1}>
          {children}
        </Grid>
      </Container>
    </>
  );
}

export default React.memo(MainLayout);
