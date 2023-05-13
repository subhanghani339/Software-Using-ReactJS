import React, { useState } from "react";
import { TextField, Button, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { useLocation, useNavigate } from "react-router-dom";
import { editData } from "../../Config/firebasemethod";
const EditCourse = () => {
const location = useLocation();
  const navigate = useNavigate();

  console.log(location.state);
  const [course, setcourse] = useState(location.state);

  const handleUpdate = (id) => {
    editData(course, "Courses", id)
      .then(() => {
        alert("Course Update Successfully");
        navigate("/institute-dashboard/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <h1 style={{ textAlign: "center" }}>EDIT COURSE</h1>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={12} lg={12}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <form onSubmit={(e)=> {e.preventDefault()}}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Course Name"
                    name="courseName"
                    value={course?.courseName}
                    onChange={e =>
                        setcourse({ ...course, courseName: e.target.value })
                      }
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Duration"
                    name="duration"
                    value={course?.duration}
                    onChange={e =>
                        setcourse({ ...course, duration: e.target.value })
                      }
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Fee"
                    type="number"
                    name="fee"
                    value={course?.fee}
                    onChange={e =>
                        setcourse({ ...course, fee: e.target.value })
                      }
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <TextField
                    fullWidth
                    label="Teacher"
                    name="teacher"
                    value={course?.teacher}
                    onChange={e =>
                        setcourse({ ...course, teacher: e.target.value })
                      }
                    required
                  />
                </Grid>

                <Grid item xs={12} md={12} lg={12}>
                  <Button onClick={() => handleUpdate(course.id)} variant="contained" color="primary" type="submit">
                    Update Course
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
export default EditCourse;
