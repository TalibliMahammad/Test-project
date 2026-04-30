import React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Favorite from "@mui/icons-material/Favorite";
import Share from "@mui/icons-material/Share";
import Delete from "@mui/icons-material/Delete";

const Feed = ({ posts}) => {




  return (
    <Box flex={4} p={2}>
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: 5 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "red" }}>S</Avatar>}
            title={post.title || "Mahammad Talibli"} 
            subheader="April 2026"
          />
          <CardMedia
            component="img"
            height="20%"
            image={`https://randomuser.me/api/portraits/men/${post.imgId}.jpg`} // Nümunə şəkil
            alt="Post image"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton><Favorite color="error" /></IconButton>
            <IconButton><Share /></IconButton>
            <IconButton><Delete /></IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default React.memo(Feed); // Lazımsız renderlərin qarşısını almaq üçün