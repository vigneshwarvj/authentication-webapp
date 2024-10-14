'use client'

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { SignInWithIdTokenCredentials } from '@supabase/supabase-js';
import { jwtDecode } from 'jwt-decode';

export default function ResetPassword() {
  const [newPassword, setNewPassword] = useState('');
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient();

  useEffect(() => {
    const hashParams = new URLSearchParams(window.location.hash.slice(1));
    const token = hashParams.get('access_token');
    if (token) {
        setAccessToken(token);
    } 
    else {
        setErrorMessage('No reset token found in the URL. Please try the reset password process again.');
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    if (!accessToken) {
      setErrorMessage('No access token found. Please try resetting your password again.');
      setIsLoading(false);
      return;
    }

    try {

    const tokenPayload = jwtDecode(accessToken);
    if (!tokenPayload) {
        throw new Error('Invalid access token');
    }

    // Getting the current session
    const { error: sessionError } = await supabase.auth.setSession({
        access_token: accessToken,
        refresh_token: accessToken,
    });

    if (sessionError) {
      throw sessionError;
    }

    const { error } = await supabase.auth.updateUser(
        { password: newPassword }
    );

    if (error) throw error;

      alert('Password updated successfully');
      router.push('/auth/sign-in');
    } catch (error) {
      console.error('Error resetting password:', error);
      setErrorMessage('Failed to reset password. Please try again.');
      setTimeout(() => {
        setErrorMessage('');
    }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!accessToken) {
    return <div>Loading... If this persists, the reset link may be invalid or expired.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isLoading}
          >
            {isLoading ? 'Resetting...' : 'Reset Password'}
          </button>
        </form>
      </div>
    </div>
  );
}
