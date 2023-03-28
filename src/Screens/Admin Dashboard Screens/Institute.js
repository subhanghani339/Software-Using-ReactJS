import { Box } from "@mui/material";
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';

const instituteList = [
  {
    name: 'ABC Institute',
    logo: 'https://via.placeholder.com/150',
    campuses: 5,
    active: true,
  },
  {
    name: 'XYZ Institute',
    logo: 'https://via.placeholder.com/150',
    campuses: 3,
    active: false,
  },
  {
    name: 'XYZ Institute',
    logo: 'https://via.placeholder.com/150',
    campuses: 3,
    active: false,
  },
  {
    name: 'XYZ Institute',
    logo: 'https://via.placeholder.com/150',
    campuses: 3,
    active: false,
  },
];

const Institute = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
       <h1 style={{textAlign:'center'}}>LIST OF INSTITUTES</h1>  
    <List style={{display:'flex',}}>
      {instituteList.map((institute) => (
        <ListItem key={institute.name}>
          <ListItemAvatar>
            <Avatar alt={institute.name} src={institute.logo} />
          </ListItemAvatar>
          <ListItemText
            primary={institute.name}
            secondary={
              <>
                <Typography component="span" variant="body2" color="textPrimary">
                  {`${institute.campuses} Campuses`}
                </Typography>
                {` - ${institute.active ? 'Active' : 'Inactive'}`}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
    </Box>
  );
};

export default Institute;