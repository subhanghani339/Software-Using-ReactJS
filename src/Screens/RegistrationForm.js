import React, { useState } from "react";
import {
  TextField,
  MenuItem,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Button,
  Grid,
} from "@mui/material";
import { Box } from "@mui/system";

const qualifications = ["Matric", "Intermediate", "Graduate"];
const courses = ["Web And Mobile Module A", "Web And Mobile Module B", "Graphic Designing"];

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <h1 style={{ textAlign: "center" }}>REGISTRATION FORM</h1>
      <form onSubmit={handleSubmit} sx={{ display: "flex" }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Student Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(event) => setName(event.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Father Name"
              variant="outlined"
              fullWidth
              value={fatherName}
              onChange={(event) => setFatherName(event.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Contact Number"
              variant="outlined"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="CNIC"
              variant="outlined"
              fullWidth
              value={CNIC}
              onChange={(e) => setCNIC(e.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Last Qualification"
                select
                variant="outlined"
                value={qualification}
                onChange={(event) => setQualification(event.target.value)}
              >
                {qualifications.map((qualification) => (
                  <MenuItem key={qualification} value={qualification}>
                    {qualification}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Course"
                select
                variant="outlined"
                value={qualification}
                onChange={(event) => setCourse(event.target.value)}
              >
                {courses.map((course) => (
                  <MenuItem key={course} value={course}>
                    {course}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default RegistrationForm;
