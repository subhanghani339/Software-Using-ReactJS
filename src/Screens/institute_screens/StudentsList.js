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
import { deleteData, getData } from "../../Config/firebasemethod";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

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

export default function StudentsList() {
  const [data, setData] = useState([]);
  const getStudentData = () => {
    getData("Students")
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStudentData();
  }, []);

  const navigate = useNavigate();
  
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1>LIST OF STUDENTS</h1>
        <Button onClick={() => {navigate("/institute-dashboard/student-form")}} variant="contained">ADD STUDENT</Button>
      </div> 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">STUDENT NAME</StyledTableCell>
              <StyledTableCell align="center">FATHER NAME</StyledTableCell>
              <StyledTableCell align="center">COURSE</StyledTableCell>
              <StyledTableCell align="center">EDIT</StyledTableCell>
              <StyledTableCell align="center">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
            {data.map((row) => (
          <TableBody onClick={() => {
            navigate(`/institute-dashboard/students-list/student-details/${row.name}`,{state: row,});}}>
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center" key={row.name} >{row.name}</StyledTableCell>
                <StyledTableCell align="center" key={row.fatherName}>{row.fatherName}</StyledTableCell>
                <StyledTableCell align="center" key={row.course}>{row.course}</StyledTableCell>
                <StyledTableCell align="center" key={row.name} onClick={(e) => {e.stopPropagation();}}>
                  <EditIcon sx={{ cursor: "pointer" }} onClick={ ()=>{ navigate("/institute-dashboard/edit-student", {state: row});}} />
                </StyledTableCell>
                <StyledTableCell align="center" key={row.name} onClick={(e) => { e.stopPropagation(); }}>
                  <DeleteIcon sx={{ cursor: "pointer" }} onClick = {(id) => { deleteData("Students", row.id).then((res)=>{alert(res)}).catch((err)=>{console.log(err)})}} />
                </StyledTableCell>
              </StyledTableRow>
          </TableBody>
            ))}
        </Table>
      </TableContainer>
    </Box>
  );
}
