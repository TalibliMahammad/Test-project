import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useState } from "react";


const Rightbar = ({}) => {
 
  return (
    <Box classname="" flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ mb: 2 }}>
          <Avatar
            alt="Remy Sharp"
            src={`https://material-ui.com/static/images/avatar/1.jpg`}
          />
          <Avatar
            alt="Travis Howard"
            src={`https://material-ui.com/static/images/avatar/2.jpg`}
          />
          <Avatar
            alt="Cindy Baker"
            src={`https://material-ui.com/static/images/avatar/3.jpg`}
          />
          {/* Daha çox avatar əlavə edilə bilər */}
        </AvatarGroup>

        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src={`https://randomuser.me/api/portraits/men/1.jpg`}
              alt="user"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://randomuser.me/api/portraits/men/2.jpg`}
              alt="user"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={`https://randomuser.me/api/portraits/men/3.jpg`}
              alt="user"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
