import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { postData } from "../../Config/firebasemethod";

const CourseForm = () => {
  const [course, setcourse] = useState({
    courseName: "",
    duration: "",
    fee: 0,
    teacher: "",
  });

  const handleChange = (e) => {
    setcourse({ ...course, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(course, "Courses");

    setcourse({
      courseName: "",
      duration: "",
      fee: 0,
      teacher: "",
    });
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <h1 style={{ textAlign: "center" }}>COURSE FORM</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Course Name"
                    name="courseName"
                    value={course.courseName}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Duration"
                    name="duration"
                    value={course.duration}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Fee"
                    type="number"
                    name="fee"
                    value={course.fee}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Teacher"
                    name="teacher"
                    value={course.teacher}
                    onChange={handleChange}
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Button variant="contained" color="primary" type="submit">
                    Add Course
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
export default CourseForm;
