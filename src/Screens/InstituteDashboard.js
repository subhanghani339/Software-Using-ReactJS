import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Route, Routes, useNavigate } from 'react-router-dom';
import CourseList from './institute_screens/CourseList';
import CourseForm from './institute_screens/CourseForm';
import RegistrationControl from './institute_screens/RegistrationControl';
import Results from './institute_screens/Results';
import StudentsList from './institute_screens/StudentsList';
import StudentsDetail from './institute_screens/StudentsDetail';
import StudentForm from './institute_screens/StudentForm';
import Quiz from './institute_screens/Quiz';
import AddQuiz from './institute_screens/AddQuiz';
import EditCourse from './institute_screens/EditCourse';
import EditStudent from './institute_screens/EditStudent';


const drawerWidth = 240;

function InstituteDashboard(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {[
          {
            name: "Course List",
            path: "",
          },
          {
            name: "Registration Control",
            path: "registration-control",
          },
          {
            name: "Results",
            path: "results",
          },
          {
            name: "Students List",
            path: "students-list",
          },
          {
            name: "Quiz",
            path: "quiz",
          },
          {
            name: "Add Quiz",
            path: "add-quiz",
          },
        ].map((text, index) => (
          <ListItem onClick={()=> navigate(text.path)} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            INSTITUTE DASHBOARD
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
          keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/course-form" element={<CourseForm />} />
          <Route path="/edit-course" element={<EditCourse />} />
          <Route path="/registration-control" element={<RegistrationControl />} />
          <Route path="/results" element={<Results />} />
          <Route path="/students-list" element={<StudentsList />} />
          <Route path="/students-list/student-details/:name" element={<StudentsDetail />} />
          <Route path="/student-form" element={<StudentForm />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/add-quiz" element={<AddQuiz />} />
          <Route path="/edit-student" element={<EditStudent />} />
      </Routes>
    </Box>
  );
}

InstituteDashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default InstituteDashboard;