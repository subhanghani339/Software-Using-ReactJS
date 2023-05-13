import React, { useEffect, useState } from "react";
import { Box, Button, Switch, Typography } from "@mui/material";
import { controlData, getData } from "../../Config/firebasemethod";

const label = { inputProps: { "aria-label": "Switch demo" } };

function RegistrationControl() {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const ChangeValue = () => {
    controlData(isChecked, "Registration Control", "Registration")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData("Registration Control")
    .then((res) => {
      setIsChecked(res);
    }).catch((err)=>{
      console.log(err);
    })
  }, []);
  return (
    <Box sx={{ p: 3, marginTop: "50px" }}>
      <Typography variant="h6" sx={{ display: "inline" }}>
        REGISTRATION FORM CONTROL
      </Typography>
      <Switch {...label} checked={isChecked} onChange={handleChange} />
      <Button variant="contained" onClick={ChangeValue}>
        SAVE
      </Button>
<br />
      <Typography variant='h6' sx={{display: "inline"}}>COURSE FORM CONTROL</Typography>
      <Switch {...label} defaultChecked />
    </Box>
  );
}

export default RegistrationControl;
