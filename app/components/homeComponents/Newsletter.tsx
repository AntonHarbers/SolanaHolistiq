"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  email: string;
};

export default function Newsletter() {
  const [subscribed, setSubscribed] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Future API call integration goes here.
    setSubscribed(true);
    reset();
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-amber-50 to-white animate-fadeIn">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow animate-fadeIn">
        <h2 className="text-2xl font-semibold mb-4">Join Our Newsletter</h2>
        <p className="mb-4">
          Get a free meal plan and stay updated on new events!
        </p>
        {subscribed ? (
          <div className="text-center">
            <p className="text-xl font-bold">
              Thank you for signing up!
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col sm:flex-row">
            <input
              {...register('email', { required: true })}
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 mb-4 sm:mb-0 sm:mr-2 flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
