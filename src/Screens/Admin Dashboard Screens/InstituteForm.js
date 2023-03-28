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
import { InstituteFormData } from "../../Config/firebasemethod";

const InstituteForm = () => {
  const [institute, setInstitute] = useState({
    name: "",
    shortName: "",
    campuses: 0,
    location: "",
    address: "",
    contact: "",
    ownerContact: "",
    ownerEmail: "",
    type: "",
  });

  const handleChange = (e) => {
    setInstitute({ ...institute, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(institute);
    InstituteFormData(institute, "Institutes")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
                    name="ownerEmail"
                    value={institute.ownerEmail}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={6} lg={6}>
                  <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
                    <InputLabel id="demo-simple-select-standard-label">
                      Type
                    </InputLabel>
                    <Select
                      value={institute.type}
                      onChange={handleChange}
                      label="Type"
                      name="type"
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

                <Grid item xs={12} md={12} lg={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Submit
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
