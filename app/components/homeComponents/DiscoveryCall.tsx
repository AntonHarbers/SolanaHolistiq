"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  startTime: string;
};

export default function DiscoveryCall() {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setBookingSubmitted(true);
    setTimeout(() => {
      setModalOpen(false);
      setBookingSubmitted(false);
      reset();
    }, 2000);
  };

  return (
    <section className="bg-gradient-to-br from-amber-50 to-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Schedule Your Free Discovery Call
        </h2>
        <p className="mb-8">
          Let’s get to know each other and find the perfect path for you.
        </p>
        <button
          onClick={() => setModalOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition duration-300"
        >
          Book a Free Call
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            {bookingSubmitted ? (
              <div className="flex flex-col items-center justify-center h-48">
                <p className="text-xl font-bold mb-4">
                  Your booking request is in process!
                </p>
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-4 py-2 rounded"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Book Your Call
                </h3>
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    {...register('name', { required: true })}
                    type="text"
                    className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    {...register('email', { required: true })}
                    type="email"
                    className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">
                    Preferred Start Time
                  </label>
                  <input
                    {...register('startTime', { required: true })}
                    type="datetime-local"
                    className="mt-1 block w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex justify-end space-x-4 mt-4">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-100 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold px-4 py-2 rounded"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
