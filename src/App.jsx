import React, { useState, useCallback, useMemo } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import CreatePostModal from './components/CreatePostModal';

function App() {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const sortedPosts = useMemo(() => {
    return [...posts].sort((a, b) => b.id - a.id);
  }, [posts]);

  return (
    <div className="bg-white min-h-screen">
      <Navbar onOpen={handleOpen} />
      <div className="max-w-[1200px] mx-auto flex justify-center gap-8 pt-20 px-4">
        {/* Sol Menyu */}
        <div className="hidden lg:block w-[240px] sticky top-20 h-fit">
          <Sidebar />
        </div>

        {/* Orta Feed */}
        <main className="w-full max-w-[470px] flex-shrink-0">
          <Feed posts={sortedPosts} />
        </main>

        {/* Sağ Panel */}
        <div className="hidden md:block w-[320px] sticky top-20 h-fit">
          <Rightbar />
        </div>
      </div>

      <CreatePostModal 
        open={open} 
        handleClose={handleClose} 
        setPosts={setPosts} 
      />
    </div>
  );
}

export default App;