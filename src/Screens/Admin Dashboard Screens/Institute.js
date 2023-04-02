import { Box } from "@mui/material";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getData } from "../../Config/firebasemethod";

const Institute = () => {
  const getInstituteData = () => {
    getData("Institutes")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    getInstituteData();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <h1 style={{ textAlign: "center" }}>LIST OF INSTITUTES</h1>
      <List style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((e, i) => (
          <ListItem key={i} className="institutesInfo" style={{width:'33%',}}>
            <ListItemAvatar>
              <Avatar alt={e.name} src={e.logo} />
            </ListItemAvatar>
            <ListItemText
              primary={e.name}
              secondary={
                <>
                  <Typography
                    component="span"
                    variant="body2"
                    color="textPrimary"
                  >
                    {`${e.campuses} Campuses`}
                  </Typography>
                  {` - ${e.active ? "Active" : "Inactive"}`}
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
