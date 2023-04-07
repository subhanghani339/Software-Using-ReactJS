import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../Config/firebasemethod";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Institute() {
  const [data, setData] = useState([]);
  const getInstituteData = () => {
    getData("Institutes")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInstituteData();
  }, []);

  const navigate = useNavigate();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "45px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1>LIST OF INSTITUTES</h1>
        <Button onClick={() => {navigate("/admin-dashboard/institute-form")}} variant="contained">ADD INSTITUTE</Button>
      </div>  
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">INSTITUTE NAME</StyledTableCell>
              <StyledTableCell align="center">SHORT NAME</StyledTableCell>
              <StyledTableCell align="center">NO OF CAMPUSES </StyledTableCell>
              <StyledTableCell align="center">EDIT</StyledTableCell>
              <StyledTableCell align="center">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
          {data.map((row, index) => (
            <TableBody
              onClick={() => {
                navigate(
                  `/admin-dashboard/institute/single-institute/${row.shortName}`,
                  {
                    state: row,
                  }
                );
              }}
              key={index}
            >
              <StyledTableRow key={index}>
                <StyledTableCell align="center" key={index}>
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="center" key={index}>
                  {row.shortName}
                </StyledTableCell>
                <StyledTableCell align="center" key={index}>
                  {row.campuses}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <EditIcon sx={{ cursor: "pointer" }} />
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  key={row.campus}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <DeleteIcon sx={{ cursor: "pointer" }} />
                </StyledTableCell>
              </StyledTableRow>
            </TableBody>
          ))}
        </Table>
      </TableContainer>
    </Box>
  );
}
