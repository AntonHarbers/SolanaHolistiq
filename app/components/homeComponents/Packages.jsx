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
      title: 'Inflammation-Free Lifestyle',
      target_audience:
        'Women experiencing chronic fatigue, bloating, skin issues, joint pain, or low energy due to hidden inflammation.',
      goal: '',
      details: [
        'Reduce chronic inflammation naturally',
        'Rebalance body systems with holistic practices',
        'Empower long-term sustainable anti-inflammatory habits',
      ],
      price: '$850',
      duration: '6 weeks (1 session per week)',
      format: 'Online 1-on-1',
      session_length: '90 Minutes per Session',
    },
    {
      title: 'Graceful Confidence – Strong Core & Posture',
      target_audience: '',
      goal: 'Build confidence by aligning your posture, strengthening your core, and deepening your inner presence.',
      details: [
        'Core & posture training (NeuroPilates based principles).',
        'Breath & body awareness techniques',
        'Mental resilience tools',
        'Posture-power coaching for presence and self-trust',
        'Home-based movement rituals',
      ],
      price: '$850',
      duration: '6 weeks (1 ',
      duration: '6 weeks (1 session per week)',
      session_length: '90 Minutes per Session',
    },
    {
      title: 'Chain of Clarity – Holistic Alignment Program',
      target_audience: '',
      goal: 'Uncover and strengthen the weak links in your life’s structure—health, mindset, energy, or direction.',
      details: [
        'Life chain analysis & holistic life wheel',
        'Guided journaling and self-reflection',
        'Techniques to shift limiting beliefs',
        'Personalized realignment map',
        'Mind-body practices for sustainable  change.',
      ],
      price: '$850',
      duration: '6 weeks (1 session per week)',
      format: 'Online 1-on-1',
      session_length: '90 Minutes per Session',
    },
    {
      title: 'Empowered Within – Self-Reliance Path',
      target_audience: '',
      goal: 'Trust your own wisdom, stand on your own feet, and live from inner certainty.',
      details: [
        'Identity & boundary coaching',
        'Emotional independence tools',
        'Journaling + self-assessments',
        'Weekly empowerment challenges',
        'Steps to act from clarity, not fear.',
      ],
      price: '$850',
      duration: '6 weeks (1 session per week)',
      format: 'Online 1-on-1',
      session_length: '90 Minutes per Session',
    },
  ];

  const groupPackages = [
    {
      title: 'Inflammation-Free Lifestyle',
      target_audience:
        'Women experiencing chronic fatigue, bloating, skin issues, joint pain, or low energy due to hidden inflammation.',
      goal: '',
      details: [
        'Reduce chronic inflammation naturally',
        'Rebalance body systems with holistic practices',
        'Empower long-term sustainable anti-inflammatory habits',
      ],
      price: '$350',
      duration: '6 weeks (1 session per week)',
      format: 'Online Group Session (up to 6 participants)',
      session_length: '90 Minutes per Session',
    },
    {
      title: 'Graceful Confidence – Strong Core & Posture',
      target_audience: '',
      goal: 'Build confidence by aligning your posture, strengthening your core, and deepening your inner presence.',
      details: [
        'Core & posture training (NeuroPilates based principles).',
        'Breath & body awareness techniques',
        'Mental resilience tools',
        'Posture-power coaching for presence and self-trust',
        'Home-based movement rituals',
      ],
      price: '$350',
      duration: '6 weeks (1 session per week)',
      format: 'Online Group Session (up to 6 participants)',
      session_length: '90 Minutes per Session',
    },
    {
      title: 'Chain of Clarity – Holistic Alignment Program',
      target_audience: '',
      goal: 'Uncover and strengthen the weak links in your life’s structure—health, mindset, energy, or direction.',
      details: [
        'Life chain analysis & holistic life wheel',
        'Guided journaling and self-reflection',
        'Techniques to shift limiting beliefs',
        'Personalized realignment map',
        'Mind-body practices for sustainable  change.',
      ],
      price: '$350',
      duration: '6 weeks (1 session per week)',
      format: 'Online Group Session (up to 6 participants)',
      session_length: '90 Minutes per Session',
    },
    {
      title: 'Empowered Within – Self-Reliance Path',
      target_audience: '',
      goal: 'Trust your own wisdom, stand on your own feet, and live from inner certainty.',
      details: [
        'Identity & boundary coaching',
        'Emotional independence tools',
        'Journaling + self-assessments',
        'Weekly empowerment challenges',
        'Steps to act from clarity, not fear.',
      ],
      price: '$350',
      duration: '6 weeks (1 session per week)',
      format: 'Online Group Session (up to 6 participants)',
      session_length: '90 Minutes per Session',
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
    <section
      id="packages"
      className="py-16 px-4 bg-gradient-to-b to-[#f7e3cf] from-[#e7ddef] "
    >
      <div className="max-w-7xl scroll-auto mx-auto">
        {/* Toggle Buttons */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => togglePackages(false)}
            className={`mr-4 px-4 py-2 border rounded transition duration-300 `}
          >
            One-on-One
          </button>
          <button
            onClick={() => togglePackages(true)}
            className={`px-4 py-2 border rounded transition duration-300 `}
          >
            Group
          </button>
        </div>

        {/* Container for package cards */}
        <div className="relative md:min-h-[40rem] md:my-16 md:overflow-x-scroll overflow-y-hidden scroll-smooth">
          <AnimatePresence mode="wait">
            <motion.div
              key={showGroup ? 'group' : 'one-on-one'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:absolute top-0 left-0 right-0 grid grid-cols-1 md:flex gap-8 "
            >
              {packagesToShow.map((pkg) => (
                <motion.div
                  key={pkg.title}
                  variants={cardVariants}
                  className="w-full"
                >
                  <div className="bg-white/20 p-4 rounded shadow text-center flex flex-col md:w-[400px] justify-between transition duration-300 hover:-translate-y-1 hover:scale-105 md:h-[450px]">
                    <div>
                      <h3 className="text-3xl font-semibold text-center mb-2">
                        {pkg.title}
                      </h3>
                      <h2 className="text-xl mb-2">Goal: {pkg.goal}</h2>
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
