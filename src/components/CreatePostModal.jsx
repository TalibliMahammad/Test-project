import React, { useState } from 'react';

const CreatePostModal = ({ open, handleClose, setPosts }) => {
  const [title, setTitle] = useState("");

  const handleAddPost = () => {
    if (title.trim() === "") return; // Boş postun qarşısını alırıq

    const newPost = { 
      id: Date.now(), 
      title: "Mahammad Talibli", 
      body: title 
    };

    setPosts((prev) => [newPost, ...prev]);
    setTitle("");
    handleClose();
  };

  if (!open) return null; // Modal bağlıdırsa heç nə render etmə

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      {/* Modal Container */}
      <div className="bg-white w-full max-w-[400px] rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <button 
            onClick={handleClose} 
            className="text-gray-500 hover:text-black transition"
          >
            ✕
          </button>
          <h2 className="text-base font-semibold">Create new post</h2>
          <button 
            onClick={handleAddPost}
            disabled={!title.trim()}
            className={`text-sm font-bold ${title.trim() ? 'text-blue-500 hover:text-blue-700' : 'text-blue-200 cursor-not-allowed'}`}
          >
            Share
          </button>
        </div>

        {/* Content Area */}
        <div className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <img 
              src="https://i.pravatar.cc/150?u=me" 
              className="w-8 h-8 rounded-full border border-gray-200" 
              alt="me" 
            />
            <span className="text-sm font-semibold">mahammad_talibli</span>
          </div>

          <textarea
            className="w-full h-32 text-base outline-none resize-none placeholder-gray-400"
            placeholder="Write a caption..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Footer / Location & Media placeholder */}
        <div className="px-4 py-2 border-t border-gray-50 flex items-center justify-between">
          <div className="flex gap-4">
            <button className="text-xl hover:scale-110 transition">🖼️</button>
            <button className="text-xl hover:scale-110 transition">📍</button>
          </div>
          <span className="text-xs text-gray-400">{title.length}/2200</span>
        </div>
      </div>

      {/* Arxa tərəfə klikləyəndə bağlanması üçün */}
      <div 
        className="absolute inset-0 -z-10" 
        onClick={handleClose}
      />
    </div>
  );
};

export default CreatePostModal;