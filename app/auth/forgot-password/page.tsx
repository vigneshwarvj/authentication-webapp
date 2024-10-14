"use client";

import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import { supabase } from '../../../lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function ForgotPasswordPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [resetLinkSent, setResetLinkSent] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage('');

        try {
            const { error } = await supabase.auth.resetPasswordForEmail(email);
            if (error) throw error;
            setResetLinkSent(true);
        } catch (error) {
            console.log(error);
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage('An unexpected error occurred.');
            }
            setTimeout(() => {
                setErrorMessage('');
            }, 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-4">Reset Your Password</h2>
                <p className="text-center text-gray-600 mb-8">Enter your email to receive a password reset link.</p>
                {resetLinkSent && (
                    <p className="mb-4 text-green-500 text-sm">We have sent the reset password link to your email.</p>
                )}
                {errorMessage && <div className="mb-4 text-red-500 text-sm">{errorMessage}</div>}
                {!resetLinkSent && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            disabled={isLoading}
                        >
                            {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : 'Send Reset Link'}
                        </button>
                    </form>
                )}
                <p className="mt-6 text-center text-sm text-gray-600">
                    Remember your password?
                    <button
                        type="button"
                        onClick={() => router.push('/auth/sign-in')}
                        className="font-medium text-indigo-600 hover:text-indigo-500 ml-1"
                    >
                        Sign in
                    </button>
                </p>
            </div>
        </div>
    );
}
