// src/components/SplashScreen.jsx
import React from 'react';

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      {/* Add your splash content, e.g., a logo or loading animation */}
      <div className="animate-spin h-16 w-16 border-4 border-blue-500 border-t-transparent rounded-full"></div>
    </div>
  );
};

export default SplashScreen;
