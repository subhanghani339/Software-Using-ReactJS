// import { Box } from '@mui/material'
// import React from 'react'

// const StudentsDetail = () => {
//   return (
//     <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
//       <h2>Students Detail</h2>
//     </Box>
//   )
// }

// export default StudentsDetail

import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import institute from "../../Images/institute.svg";

const StudentsDetail = () => {
  const location = useLocation();

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Avatar
        alt="Institute Logo"
        src={institute}
        style={{
          width: "12rem",
          height: "auto",
          marginBottom: "1rem",
          padding: '2rem',
          border:'4px solid #000',
        }}
      />

      <Typography variant="h4" gutterBottom>
        <span style={{ color: "black" }}>{location.state.name} {location.state.fatherName}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        EMAIL ADDRESS:{" "}
        <span style={{ color: "#000" }}>{location.state.email}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        CONTACT:{" "}
        <span style={{ color: "#000" }}>{location.state.contact}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        CNIC: <span style={{ color: "#000" }}>{location.state.CNIC}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        GENDER: <span style={{ color: "#000" }}>{location.state.gender}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        CITY: <span style={{ color: "#000" }}>{location.state.city}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        COUNTRY: <span style={{ color: "#000" }}>{location.state.country}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        COURSE: <span style={{ color: "#000" }}>{location.state.course}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        ADDRESS: <span style={{ color: "#000" }}>{location.state.address}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        QUALIFICATION: <span style={{ color: "#000" }}>{location.state.qualification}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        SECTION: <span style={{ color: "#000" }}>{location.state.section}</span>
      </Typography>
    </Box>
  );
};

export default StudentsDetail;
