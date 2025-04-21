'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import { groupPackages, oneOnOnePackages, Package } from '@/lib/packages';

const overlayVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const modalVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.4 },
  },
  exit: {
    opacity: 0,
    y: 50,
    transition: { duration: 0.3 },
  },
};

export default function Packages() {
  const [showGroup, setShowGroup] = useState(false);
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<Package | null>(null);



  function openModal(pkg: Package) {
    setSelectedPkg(pkg);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedPkg(null);
  }

  const togglePackages = (value: boolean) => {
    if (showGroup !== value) {
      setShowGroup(value);
    }
  };

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
      className="py-16 px-4 bg-gradient-to-b to-[#f7e3cf] from-[#e7ddef]"
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
        <div className="relative md:py-10 overflow-y-hidden overflow-x-auto scroll-smooth px-4 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={showGroup ? 'group' : 'one-on-one'}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col md:flex-row gap-8"
            >
              {packagesToShow.map((pkg) => (
                <motion.div
                  key={pkg.title}
                  variants={cardVariants}
                  className="flex-shrink-0 w-full md:w-[400px]"
                >
                  <div className="bg-white/20 p-4 rounded shadow text-center flex flex-col justify-between transition duration-300 hover:-translate-y-1 hover:scale-105 md:h-[450px]">
                    <div>
                      <h3 className="text-3xl font-semibold mb-2">
                        {pkg.title}
                      </h3>
                      <h2 className="text-xl mb-2">Goal: {pkg.goal}</h2>
                      <ul className="list-disc list-inside mb-4 text-gray-600">
                        {pkg.details.map((detail, i) => (
                          <li key={i} className="text-sm">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col items-center">
                      <p className="text-2xl font-bold mb-4 px-4 py-2 bg-primary/10 text-primary rounded">
                        {pkg.price}
                      </p>
                      <button className="bg-primary hover:bg-accent transition duration-300 text-white font-semibold px-4 py-2 rounded" onClick={() => openModal(pkg)}>
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
      {typeof window !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {modalOpen && selectedPkg && (
              <motion.div
                key="overlay"
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#f7e3cf]/90"
                variants={overlayVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.div
                  key="modal"
                  className="bg-white rounded-lg p-8 max-w-lg w-full"
                  variants={modalVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {/* Package Info */}
                  <h3 className="text-2xl font-bold mb-4">
                    {selectedPkg.title}
                  </h3>
                  <p className="mb-2"><strong>Price:</strong> {selectedPkg.price}</p>
                  <p className="mb-2"><strong>Duration:</strong> {selectedPkg.duration}</p>
                  <p className="mb-4"><strong>Format:</strong> {selectedPkg.format}</p>
                  <ul className="list-disc list-inside mb-4 text-gray-600">
                    {selectedPkg.details.map((d: string, i: number) => (
                      <li key={i} className="text-sm">{d}</li>
                    ))}
                  </ul>
                  {/* Actions */}
                  <div className="flex justify-end space-x-4 mt-6">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => router.push(`/payment?package=${encodeURIComponent(selectedPkg.title)}`)}
                      className="bg-primary text-white px-4 py-2 rounded hover:bg-accent transition"
                    >
                      Confirm & Pay
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
