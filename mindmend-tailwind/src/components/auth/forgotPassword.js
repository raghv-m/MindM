"use client";

import { useState } from "react";
import { Button, Input, Label } from "@relume_io/relume-ui"; // Assuming you're using relume-ui
import axios from "axios"; // For making API requests, install it using: npm install axios

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Make a POST request to your backend API to trigger the password reset email
      const response = await axios.post("/api/users/forgot-password", { email });
      setMessage("If an account with that email exists, a password reset link has been sent.");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex min-h-screen items-center justify-center px-5 py-10">
      <div className="max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Forgot Password</h1>
        <p className="mb-6 text-center text-sm">
          Enter your email address below and we'll send you a link to reset your password.
        </p>

        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
          <div className="grid w-full items-center">
            <Label htmlFor="email" className="mb-2">
              Email*
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            className="mt-4"
          >
            {loading ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}

        <div className="mt-6 text-center">
          <a href="/login" className="text-sm text-blue-500 underline">
            Back to login
          </a>
        </div>
      </div>
    </section>
  );
};
