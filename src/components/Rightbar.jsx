import React from 'react';

const Rightbar = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="https://i.pravatar.cc/150?u=me" className="w-12 h-12 rounded-full" alt="me" />
          <div>
            <p className="text-sm font-semibold">talibli.dev</p>
            <p className="text-sm text-gray-500">Mahammad Talibli</p>
          </div>
        </div>
        <button className="text-blue-500 text-xs font-bold">Switch</button>
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-sm font-semibold text-gray-500">Suggested for you</span>
        <button className="text-xs font-bold">See All</button>
      </div>

      {/* Suggestion Item */}
      {[1, 2, 3].map(id => (
        <div key={id} className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            <img src={`https://i.pravatar.cc/150?u=${id+10}`} className="w-8 h-8 rounded-full" alt="user" />
            <div>
              <p className="text-sm font-semibold">user_{id}44</p>
              <p className="text-xs text-gray-500">Followed by ali + 2 others</p>
            </div>
          </div>
          <button className="text-blue-500 text-xs font-bold">Follow</button>
        </div>
      ))}
    </div>
  );
};

export default Rightbar;