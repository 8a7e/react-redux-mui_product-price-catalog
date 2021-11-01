import React, { useState } from "react";
import { Grid, TextField, Typography } from "@mui/material";
import { CompareArrows } from "@mui/icons-material";

const CurrencyExchange = () => {
  const regexp = /^[0-9\b]*[.]*[0-9\b]*$/;

  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    order: string
  ) => {
    const value = e.currentTarget.value;
    if (regexp.test(value)) {
      switch (order) {
        case "first":
          setFirstValue(value);
          break;
        case "second":
          setSecondValue(value);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography textAlign="center" variant="h6">
          Currenxy exchange rate
        </Typography>
      </Grid>
      <Grid container xs={6} justifyContent="space-between" flexDirection="row">
        <Grid item xs={5}>
          <TextField
            onChange={(e) => {
              handleChange(e, "first");
            }}
            value={firstValue}
            fullWidth
            id="outlined-basic"
            label="BYN"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={1} textAlign="center">
          <CompareArrows sx={{ fontSize: 40, opacity: 0.2 }} />
        </Grid>
        <Grid item xs={5}>
          <TextField
            onChange={(e) => {
              handleChange(e, "second");
            }}
            value={secondValue}
            fullWidth
            id="outlined-basic"
            label="RUB"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default React.memo(CurrencyExchange);
