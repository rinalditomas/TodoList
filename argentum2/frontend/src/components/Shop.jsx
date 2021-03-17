import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import PaymentIcon from '@material-ui/icons/Payment';

const TAX_RATE = 0.07;

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const yerbas = [
  {
    id: 1,
    nombre: "Playadito",
    precio: 200,
    imagen:
      "https://ardiaprod.vteximg.com.br/arquivos/ids/188719-1000-1000/YERBA-PLAYADITO-SUAVE-1-KG_1.jpg?v=637427630884900000",
    stock: 2,
  },
  {
    id: 2,
    nombre: "Union",
    precio: 180,
    imagen:
      "https://supermercado.carrefour.com.ar/media/catalog/product/7/7/7790387014334_02.jpg",
      stock: 5,
  },
  {
    id: 3,
    nombre: "Amanda",
    precio: 165,
    imagen:
      "http://ardiaprod.vteximg.com.br/arquivos/ids/186878-500-500/Yerba-Mate-Amanda-de-Campo-1-Kg-_1.jpg?v=637427594485800000",
      stock: 1,
  },
];

const invoiceSubtotal = subtotal(yerbas);
const invoiceTaxes = TAX_RATE * invoiceSubtotal;
const invoiceTotal = invoiceTaxes + invoiceSubtotal;

export default function SpanningTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell
              align="left"
              colSpan={3}
              style={{ fontFamily: "'Lobster Two', cursive", fontSize: "50px" }}
            >
              Mi carrito
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Mis Productos
            </TableCell>
            <TableCell
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Nombre
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Unidad
            </TableCell>
            <TableCell
              align="right"
              style={{
                fontSize: "20px",
                textDecoration: "underline",
                fontFamily: "'Shippori Mincho B1', serif",
                color: "#C25500",
              }}
            >
              Precio
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {yerbas.map((yerba) => (
            <TableRow key={yerba.nombre}>
              <TableCell>
                <Avatar alt="" src={yerba.imagen} />
              </TableCell>
              <TableCell style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black"}}>{yerba.nombre}</TableCell>
              <TableCell align="right" style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black"}}>{yerba.stock}</TableCell>
              <TableCell align="right" style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black"}}>{yerba.precio}</TableCell>
              {/* <TableCell align="right">{ccyFormat(yerba.price)}</TableCell> */}
            </TableRow>
          ))}

          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black", textDecoration:"underline"}}>Unidades</TableCell>
            <TableCell align="right" style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black"}}>{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right" style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black"}}>{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black", textDecoration:"underline"}}>Subtotal</TableCell>
            <TableCell align="right" style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"18px", color: "black"}}>{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2} style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"22px", color: "black", textDecoration: "underline", fontWeight:"bold"}}>Total</TableCell>
            <TableCell align="right" style={{fontFamily: "'Shippori Mincho B1', serif", fontSize:"22px", color: "black", textDecoration: "underline", fontWeight:"bold"}}>{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      <Button
      align="right"
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<PaymentIcon />}
      >
        Pagar
      </Button>
      </Table>
    </TableContainer>

  );
}
