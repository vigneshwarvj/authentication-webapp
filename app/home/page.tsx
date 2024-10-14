// app/page.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-indigo-600 w-full py-4">
        <h1 className="text-center text-white text-3xl font-bold">Welcome to Our App!</h1>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-lg text-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-4">
            We will share the Community link. You're in waitlist. Stay tuned!
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400">
              Learn More
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 w-full py-4">
        <p className="text-center text-white text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
