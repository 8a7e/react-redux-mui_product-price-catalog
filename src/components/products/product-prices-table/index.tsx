import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function createData(
  store: string,
  price: number,
  currency: string,
  lastUpdate: string
) {
  return { store, price, currency, lastUpdate };
}

const rows = [
  createData("Магнит", 100, "RUB", "10.10.2021"),
  createData("Пятёрочка", 101, "RUB", "10.10.2021"),
  createData("Перекрёсток", 120, "RUB", "10.10.2021"),
];

function ProductPricesTable() {
  return (
    <TableContainer component={Paper} sx={{}}>
      <Table padding="none" size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Магазин</TableCell>
            <TableCell align="right">Цена</TableCell>
            <TableCell align="right">Валюта</TableCell>
            <TableCell align="right">Обновлено</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.store}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.store}
              </TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.currency}</TableCell>
              <TableCell align="right">{row.lastUpdate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default React.memo(ProductPricesTable);
