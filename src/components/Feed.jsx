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

const Feed = ({ posts, onDelete }) => { // onDelete funksiyasını bura əlavə edə bilərsən
  return (
    <Box flex={4} p={{ xs: 0, md: 2 }}> {/* Mobildə kənar boşluqları azaldırıq */}
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: { xs: 2, md: 5 }, borderRadius: 2 }}>
          <CardHeader
            avatar={<Avatar sx={{ bgcolor: "royalblue" }}>{post.title ? post.title[0] : "M"}</Avatar>}
            title={post.title || "Mahammad Talibli"} 
            subheader="April 2026"
          />
          <CardMedia
            component="img"
            height="400"
            image={`https://randomuser.me/api/portraits/men/${post.imgId}.jpg`}
            alt="Post image"
            sx={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography variant="body1" color="text.primary">
              {post.body}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton><Favorite color="error" /></IconButton>
            <IconButton><Share /></IconButton>
            <IconButton sx={{ marginLeft: "auto" }}> {/* Silmə düyməsini sağa itələyirik */}
              <Delete />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default React.memo(Feed);