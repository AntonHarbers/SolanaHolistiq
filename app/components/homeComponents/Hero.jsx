import React from 'react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white py-20 animate-fadeIn">
      {/* Decorative background blob */}
      <div className="absolute inset-0">
        <svg
          className="absolute left-1/2 transform -translate-x-1/2 scale-150 opacity-20"
          width="600"
          height="600"
          fill="none"
          viewBox="0 0 600 600"
        >
          <circle cx="300" cy="300" r="300" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="300"
              cy="300"
              r="300"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FBD38D" />
              <stop offset="1" stopColor="#FEEBC8" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Top Section: Title, Description & CTA */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fadeIn delay-150 flex flex-col">
            <h1 className="text-5xl font-extrabold text-gray-800 leading-tight mb-4">
              Solana Holistiq
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Unleash your inner harmony with transformative holistic coaching.
              Dive into personalized sessions that blend wellness, mindfulness,
              and life balance to empower you every step of the way.
            </p>
            <button className="mx-auto md:mx-0 w-fit bg-primary hover:bg-accent transition-all duration-300 ease-in-out text-white font-semibold py-3 px-8 rounded shadow-lg transform hover:-translate-y-1 hover:scale-105 animate-fadeIn delay-300">
              Get Started
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center animate-fadeIn delay-200">
            <img
              src="https://picsum.photos/seed/holistic/600/400"
              alt="Holistic Coaching Illustration"
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Bottom Section: Coach Profile */}
        <div className="mt-16 flex flex-col items-center animate-fadeIn delay-400">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Meet Your Guide
          </h2>
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
            <img
              src="https://picsum.photos/seed/coach/100/100"
              alt="Coach Profile"
              className="w-24 h-24 rounded-full border-4 border-primary shadow-md mb-4 sm:mb-0"
            />
            <p className="text-lg text-gray-700 text-center sm:text-left">
              Jane Doe, a renowned holistic coach with over a decade of
              empowering journeys, is here to guide you toward a balanced and
              fulfilling life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
