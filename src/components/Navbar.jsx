import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { Mail, Notifications } from "@mui/icons-material";

import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          sarkhanrahimlidev
        </Typography>
        <Search>
          <InputBase placeholder="Search by name..." sx={{ width: "100%" }} />
        </Search>
        <Icons>
          <Badge badgeContent={1} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={7} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;