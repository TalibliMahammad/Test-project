import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Switch from "@mui/material/Switch";
import Home from "@mui/icons-material/Home";
import Article from "@mui/icons-material/Article";
import Group from "@mui/icons-material/Group";
import Storefront from "@mui/icons-material/Storefront";
import Person from "@mui/icons-material/Person";
import Settings from "@mui/icons-material/Settings";
import AccountBox from "@mui/icons-material/AccountBox";
import ModeNight from "@mui/icons-material/ModeNight";

const Sidebar = ({ mode, setMode }) => {
  const menuItems = [
    { text: "Homepage", icon: <Home /> },
    { text: "Pages", icon: <Article /> },
    { text: "Groups", icon: <Group /> },
    { text: "Marketplace", icon: <Storefront /> },
    { text: "Friends", icon: <Person /> },
    { text: "Settings", icon: <Settings /> },
    { text: "Profile", icon: <AccountBox /> },
  ];

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component="a" href={`#${item.text.toLowerCase()}`}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon><ModeNight /></ListItemIcon>
              <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;