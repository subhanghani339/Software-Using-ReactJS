import React, { useState } from "react";
import { Box, Switch, Typography } from "@mui/material";

function RegistrationControl() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    console.log(isChecked); // add this line to log the state to the console
  };

  return (
    <Box sx={{ p: 3, marginTop: "50px" }}>
      <Typography variant="h6" sx={{ display: "inline" }}>
        REGISTRATION FORM CONTROL
      </Typography>
      <Switch checked={isChecked} onChange={handleChange} color="primary" />
    </Box>
  );
}

export default RegistrationControl;
