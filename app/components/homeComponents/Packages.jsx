'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Packages() {
  const [showGroup, setShowGroup] = useState(false);

  const togglePackages = (value) => {
    if (showGroup !== value) {
      setShowGroup(value);
    }
  };

  const oneOnOnePackages = [
    {
      title: 'Starter Package',
      details: ['1-on-1 session', 'Personalized plan', 'Follow-up support'],
      price: '$99',
    },
    {
      title: 'Pro Package',
      details: [
        '3 sessions',
        'In-depth consultation',
        'Customized wellness plan',
        'Email support',
      ],
      price: '$249',
    },
    {
      title: 'VIP Package',
      details: [
        'Weekly sessions for 3 months',
        '24/7 support',
        'Personalized nutrition guide',
        'Exclusive resources',
      ],
      price: '$699',
    },
  ];

  const groupPackages = [
    {
      title: 'Group Starter',
      details: ['Group session', 'Basic group plan', 'Community access'],
      price: '$49',
    },
    {
      title: 'Group Pro',
      details: [
        'Weekly group sessions',
        'Detailed group plan',
        'Community access',
        'Q&A sessions',
      ],
      price: '$149',
    },
    {
      title: 'Group VIP',
      details: [
        'Daily group sessions',
        'Advanced group plan',
        'Community access',
        'Exclusive webinars',
      ],
      price: '$299',
    },
  ];

  const packagesToShow = !showGroup ? oneOnOnePackages : groupPackages;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-5xl mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => togglePackages(false)}
            className={`mr-4 px-4 py-2 border rounded transition duration-300 ${
              !showGroup
                ? 'bg-primary text-white'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
          >
            One-on-One
          </button>
          <button
            onClick={() => togglePackages(true)}
            className={`px-4 py-2 border rounded transition duration-300 ${
              showGroup
                ? 'bg-primary text-white'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
          >
            Group
          </button>
        </div>

        {/* Container for package cards */}
        <div className="relative min-h-[24rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={showGroup ? 'group' : 'one-on-one'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute top-0 left-0 right-0 grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {packagesToShow.map((pkg) => (
                <motion.div
                  key={pkg.title}
                  variants={cardVariants}
                  className="w-full"
                >
                  <div className="bg-white/50 p-6 rounded shadow text-center flex flex-col justify-between transition duration-300 hover:-translate-y-1 hover:scale-105 md:h-96">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
                      <ul className="list-disc list-inside text-center mb-4">
                        {pkg.details.map((detail, i) => (
                          <li key={i} className="text-sm text-gray-600">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center flex-col">
                      <p className="text-2xl font-bold mb-4 inline-block px-4 py-2 bg-primary/10 text-primary rounded">
                        {pkg.price}
                      </p>
                      <button className="bg-primary hover:bg-accent transition duration-300 text-white font-semibold px-4 py-2 rounded">
                        Book Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
