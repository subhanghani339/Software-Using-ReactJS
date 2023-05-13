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
  Container,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { editData } from "../../Config/firebasemethod";

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
const courses = [
  "Web And Mobile Module A",
  "Web And Mobile Module B",
  "Graphic Designing",
];

const sections = ["A", "B", "C", "D", "E"];

const EditStudent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location.state);
  const [Student, setStudent] = useState(location.state);

  const handleUpdate = (id) => {
    editData(Student, "Students", id)
      .then(() => {
        alert("Student Update Successfully");
        navigate("/institute-dashboard/students-list");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth="md" disableGutters sx={{ marginTop: "50px" }}>
      <h1 style={{ textAlign: "center" }}>EDIT STUDENT</h1>
      <form onSubmit={(e)=> {e.preventDefault()}} sx={{ display: "flex" }}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          className="RegistrationForm"
        >
          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Student Name"
              variant="outlined"
              fullWidth
              value={Student?.name}
              onChange={(e) => setStudent({ ...Student, name: e.target.value })}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Father Name"
              variant="outlined"
              fullWidth
              value={Student?.fatherName}
              onChange={(e) =>
                setStudent({ ...Student, fatherName: e.target.value })
              }
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              type="email"
              value={Student?.email}
              onChange={(e) =>
                setStudent({ ...Student, email: e.target.value })
              }
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={Student?.password}
              onChange={(e) =>
                setStudent({ ...Student, password: e.target.value })
              }
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="Contact Number"
              variant="outlined"
              fullWidth
              value={Student?.contact}
              onChange={(e) =>
                setStudent({ ...Student, contact: e.target.value })
              }
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <TextField
              label="CNIC"
              variant="outlined"
              fullWidth
              value={Student?.CNIC}
              onChange={(e) => setStudent({ ...Student, CNIC: e.target.value })}
              margin="normal"
            />
          </Grid>

          <Grid item lg={6} md={6} sm={12}>
            <FormControl fullWidth margin="normal">
              <TextField
                label="City"
                select
                variant="outlined"
                value={Student?.city}
                onChange={(e) =>
                  setStudent({ ...Student, city: e.target.value })
                }
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
                value={Student?.country}
                onChange={(e) =>
                  setStudent({ ...Student, country: e.target.value })
                }
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
                value={Student?.gender}
                onChange={(e) =>
                  setStudent({ ...Student, gender: e.target.value })
                }
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
                value={Student?.qualification}
                onChange={(e) =>
                  setStudent({ ...Student, qualification: e.target.value })
                }
              >
                {qualifications.map((qualification) => (
                  <MenuItem
                    key={qualification}
                    value={qualification}
                  >
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
                value={Student?.course}
                onChange={(e) =>
                  setStudent({ ...Student, course: e.target.value })
                }
              >
                {courses.map((course, index) => (
                  <MenuItem key={index} value={course}>
                    {course}
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
                value={Student?.section}
                onChange={(e) =>
                  setStudent({ ...Student, section: e.target.value })
                }
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
              value={Student?.address}
              onChange={(e) =>
                setStudent({ ...Student, address: e.target.value })
              }
              margin="normal"
            />
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <Button onClick={() => handleUpdate(Student.id)} variant="contained" color="primary" type="submit">
              Update Student
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default EditStudent;
