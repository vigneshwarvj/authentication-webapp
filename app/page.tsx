"use client"

import { useRouter } from 'next/navigation';
import React from 'react';

const HomePage = () => {

  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <header className="bg-indigo-600 w-full py-4">
        <h1 className="text-center text-white text-3xl font-bold">Welcome to Our App!</h1>
      </header>
      
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="max-w-lg text-center bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Join Our Community</h2>
          <p className="text-gray-700 mb-4">
            Sign up now to connect with others and start your journey.
          </p>
          <div className="flex justify-center space-x-4">
          <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700" onClick={() => router.push('/auth/sign-in')}>
              Log In
            </button>
            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700" onClick={() => router.push('/auth/sign-up')}>
              Sign Up
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 w-full py-4">
        <p className="text-center text-white text-sm">
          © 2024 Hello World Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
