import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import { createUser } from "../../Config/firebasemethod";

const InstituteForm = () => {
  const [institute, setInstitute] = useState({
    name: "",
    shortName: "",
    campuses: 0,
    location: "",
    address: "",
    contact: "",
    ownerContact: "",
    email: "",
    password: "",
    instituteType: "",
    userType: "",
  });

  const handleChange = (e) => {
    setInstitute({ ...institute, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(institute, "Institutes");

    setInstitute({
      name: "",
      shortName: "",
      campuses: 0,
      location: "",
      address: "",
      contact: "",
      ownerContact: "",
      email: "",
      password: "",
      instituteType: "",
      userType: "",
    });
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <h1 style={{ textAlign: "center" }}>INSTITUTE FORM</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Institute Name"
                    name="name"
                    value={institute.name}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Short Name"
                    name="shortName"
                    value={institute.shortName}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="No of Campuses"
                    type="number"
                    name="campuses"
                    value={institute.campuses}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Location"
                    name="location"
                    value={institute.location}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Address"
                    name="address"
                    value={institute.address}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Contact"
                    name="contact"
                    value={institute.contact}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Owner Contact"
                    name="ownerContact"
                    value={institute.ownerContact}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Owner Email"
                    name="email"
                    value={institute.email}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <TextField
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    value={institute.password}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Institute Type
                    </InputLabel>
                    <Select
                      value={institute.instituteType}
                      onChange={handleChange}
                      label="Institute Type"
                      name="instituteType"
                    >
                      <MenuItem value="None">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"School"}>School</MenuItem>
                      <MenuItem value={"College"}>College</MenuItem>
                      <MenuItem value={"University"}>University</MenuItem>
                      <MenuItem value={"Institute"}>Institute</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      User Type
                    </InputLabel>
                    <Select
                      value={institute.userType}
                      onChange={handleChange}
                      label="User Type"
                      name="userType"
                    >
                      <MenuItem value="None">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={"Institute"}>Institute</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Add Institute
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
export default InstituteForm;
