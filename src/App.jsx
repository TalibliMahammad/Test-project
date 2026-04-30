import React, { useState, useCallback, useMemo } from 'react';
import { Container, Box, Fab, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
const randomImgId = Math.floor(Math.random() * 99) + 1;

  // Modal açma/bağlama funksiyası - useCallback ilə memoize olunur
  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // API-dən gələn datanı filterləmək və ya emal etmək üçün useMemo nümunəsi
  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.id - a.id);
  }, [posts]);



  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      <Container className='' maxWidth="xl">
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Sidebar />
          <Feed  posts={sortedPosts} />
          <Rightbar  />
        </Stack>
      </Container>
      
      {/* Floating Action Button (FAB) */}
      <Fab 
        color="primary" 
        sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <CreatePostModal  open={open} handleClose={handleClose} setPosts={setPosts} />
    </Box>
  );
}

export default App;