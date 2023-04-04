import React from "react";
import { Avatar, Box, Container, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import institute from "../../Images/institute.svg";

const SingleInstitute = () => {
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
        <span style={{ color: "black" }}>{location.state.name}</span>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <span style={{ color: "blue" }}>({location.state.shortName})</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        No. of Campuses:{" "}
        <span style={{ color: "#000" }}>{location.state.campuses}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Location:{" "}
        <span style={{ color: "#000" }}>{location.state.location}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Address: <span style={{ color: "#000" }}>{location.state.address}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Contact: <span style={{ color: "#000" }}>{location.state.contact}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Owner Contact:{" "}
        <span style={{ color: "#000" }}>{location.state.ownerContact}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Owner Email:{" "}
        <span style={{ color: "#000" }}>{location.state.ownerEmail}</span>
      </Typography>
    </Box>
  );
};

export default SingleInstitute;
