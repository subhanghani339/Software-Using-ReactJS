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

export default function CourseList() {
  const [data, setData] = useState([]);
  const getCourseData = () => {
    getData("Courses")
      .then((res) => {
        // console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCourseData();
  }, []);

  const navigate = useNavigate();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <h1>LIST OF COURSES</h1>
        <Button onClick={() => {navigate("/institute-dashboard/course-form")}} variant="contained">ADD COURSE</Button>
      </div> 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">COURSE NAME</StyledTableCell>
              <StyledTableCell align="center">DURATION</StyledTableCell>
              <StyledTableCell align="center">FEES</StyledTableCell>
              <StyledTableCell align="center">ACTION</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell align="center" key={row.courseName} >{row.courseName}</StyledTableCell>
                <StyledTableCell align="center" key={row.duration}>{row.duration}</StyledTableCell>
                <StyledTableCell align="center" key={row.fee}>${row.fee}</StyledTableCell>
                <StyledTableCell align="center" key={row.name}>{row.duration}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
