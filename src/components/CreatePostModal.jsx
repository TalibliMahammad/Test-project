import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const StyledModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const CreatePostModal = ({ open, handleClose, setPosts, }) => {
  const [title, setTitle] = useState("");
 

  const handleAddPost = async () => {
    const newPost = { id: Date.now(), title: "User Name", body: title, imgId: Math.floor(Math.random() * 99) + 1 };
    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    handleClose(); 
  };

  return (
    <StyledModal open={open} onClose={handleClose}>
      <Box width={400} height={280} bgcolor="white" p={3} borderRadius={5}>
        <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
        <TextField
          sx={{ width: "100%", mt: 2 }}
          multiline
          rows={3}
          placeholder="What's on your mind?"
          variant="standard"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }}
          onClick={handleAddPost}
        >
          Post
        </Button>
      </Box>
    </StyledModal>
  );
};

export default CreatePostModal;