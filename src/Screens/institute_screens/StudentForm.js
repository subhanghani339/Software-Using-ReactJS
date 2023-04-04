import React, { useEffect, useState } from "react";
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
  Container,
} from "@mui/material";
import { getData } from "../../Config/firebasemethod";

const qualifications = ["Matric", "Intermediate", "Graduate"];
const cities = [
  "Karachi",
  "Islamabad",
  "Lahore",
  "Multan",
  "Faisalabad",
  "Other",
];
const countries = ["Pakistan", "India", "Canada", "USA", "Other"];

const sections = ["A", "B", "C", "D", "E"];

const StudentForm = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [password, setPassword] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState("");
  const [section, setSection] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");

  const [courseData, setCourseData] = useState([]);
  const getInstituteData = () => {
    getData("Courses")
      .then((res) => {
        console.log(res);
        setCourseData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInstituteData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
    <Container
      maxWidth="lg"
      disableGutters
      sx={{ marginBottom: "50px", marginTop: "20px", p: 3 }}
    >
      <h1 style={{ textAlign: "center" }}>STUDENT FORM</h1>
      <form onSubmit={handleSubmit} sx={{ display: "flex" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="StudentForm"
        >
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
                label="City"
                select
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                {cities.map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Country"
                select
                variant="outlined"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                {countries.map((country, index) => (
                  <MenuItem key={index} value={country}>
                    {country}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                aria-label="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
                style={{ display: "flex", flexDirection: "row" }}
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
                value={course}
                onChange={(event) => setCourse(event.target.value)}
              >
                {courseData.map((course, index) => (
                  <MenuItem key={index} value={course.courseName}>
                    {course.courseName}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item sm={12} md={6} lg={6}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="Section"
                select
                variant="outlined"
                value={section}
                onChange={(e) => setSection(e.target.value)}
              >
                {sections.map((section, index) => (
                  <MenuItem key={index} value={section}>
                    {section}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              margin="normal"
            />
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <Button variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default StudentForm;
