import React, { useState, useCallback, useMemo } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.id - a.id);
  }, [posts]);

  return (
    <Box bgcolor={"background.default"} color={"text.primary"}>
      <Navbar />
      {/* Container daxilində Stack istifadə edərək yan-yana düzürük */}
      <Container maxWidth="xl">
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="space-between"
        >
          {/* Sidebar: flex=1 (Sol tərəf) */}
          <Sidebar />
          
          {/* Feed: flex=4 (Orta hissə - daha geniş) */}
          <Feed posts={sortedPosts} />
          
          {/* Rightbar: flex=2 (Sağ tərəf) */}
          <Rightbar />
        </Stack>
      </Container>
      
      <Fab 
        color="primary" 
        sx={{ 
          position: "fixed", 
          bottom: 20, 
          left: { xs: "calc(50% - 25px)", md: 30 } 
        }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <CreatePostModal 
        open={open} 
        handleClose={handleClose} 
        setPosts={setPosts} 
      />
    </Box>
  );
}

export default App;