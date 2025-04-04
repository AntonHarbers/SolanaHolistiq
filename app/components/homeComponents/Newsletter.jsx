import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">Join Our Newsletter</h2>
        <p className="mb-4">
          Get a free meal plan and stay updated on new events!
        </p>
        <form className="flex flex-col sm:flex-row">
          <input
            type="email"
            placeholder="Enter your email"
            className="border px-4 py-2 mb-4 sm:mb-0 sm:mr-2 flex-1"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
}
