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
import { useNavigate } from "react-router-dom";

const Institute = () => {
  const [data, setData] = useState([]);
  const getInstituteData = () => {
    getData("Institutes")
      .then((res) => {
        console.log(res);
        setData(res);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getInstituteData();
  }, []);

  const navigate = useNavigate();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, marginTop: "25px" }}>
      <h1 style={{ textAlign: "center" }}>LIST OF INSTITUTES</h1>
      <List style={{ display: "flex", flexWrap: "wrap" }}>
        {data.map((e, i) => (
          <ListItem
            key={i}
            className="institutesInfo"
            style={{ width: "33%" }}
            onClick={() => {
              navigate(`/admin-dashboard/institute/single-institute/${e.shortName}`, {
                state: e,
              });
            }}
          >
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
