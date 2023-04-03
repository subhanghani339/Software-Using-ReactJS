// import { Box } from "@mui/material";
// import React from "react";
import { useLocation } from "react-router-dom";

// const SingleInstitute = () => {
//   const location = useLocation();
//   console.log(location.state);
//   return (
//     <div>
//       <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "50px" }}>
//         <h1 style={{ display: "inline" }}>{location.state.name}</h1>
//         &nbsp;
//         <span>
//           <big>({location.state.shortName})</big>
//         </span>
//         <p>Number of Campus: {location.state.campuses}</p>
//         <span>Contact Number: {location.state.contact} </span>
//       </Box>
//     </div>
//   );
// };

// export default SingleInstitute;

import React from 'react';
import { Avatar, Box, Container, Typography } from '@mui/material';

const SingleInstitute = () => {
  const logoUrl = '/logo.png';
  const location = useLocation();
  
  return (
    <Box style={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width:'100%',
      backgroundColor: '#f5f5f5',
    }}>
      <Avatar
        alt="Institute Logo"
        src={logoUrl}
        style={{ 
          width: '10rem',
          height: '10rem',
          marginBottom: '1rem',
        }}
      />
      <Typography variant="h4" gutterBottom>
        <span style={{ color: 'black' }}>{location.state.name}</span>
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        <span style={{ color: 'blue' }}>{location.state.shortName}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        No. of Campuses: <span style={{ color: 'red' }}>{location.state.campuses}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Location: <span style={{ color: 'red' }}>{location.state.location}</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Address: <span style={{ color: 'red' }}>123 Main St, City, Country</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Contact: <span style={{ color: 'red' }}>+1 (123) 456-7890</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Owner Contact: <span style={{ color: 'red' }}>+1 (123) 456-7890</span>
      </Typography>
      <Typography variant="body1" gutterBottom>
        Owner Email: <span style={{ color: 'red' }}>owner@institute.com</span>
      </Typography>
    </Box>
  );
};

export default SingleInstitute;