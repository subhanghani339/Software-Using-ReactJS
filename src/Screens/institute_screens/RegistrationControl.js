import React, { useState } from "react";
import { Box, Switch, Typography } from "@mui/material";
import { controlData } from "../../Config/firebasemethod";

function RegistrationControl() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    controlData(isChecked,"Registration Control","Registration")

    console.log(isChecked);
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
