'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

export default function OrderProducts() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className={
            'group px-3 py-2 rounded-md inline-flex justify-center text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-200' +
            (menuActive && ' bg-gray-300 text-gray-200')
          }
          id="menu-button"
          aria-expanded="false"
          aria-haspopup="true"
          onClick={() => setMenuActive((prev) => !prev)}
        >
          Sort
          <svg
            className={
              '-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500 transition-transform duration-100' +
              (menuActive && ' rotate-180')
            }
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <AnimatePresence mode="wait">
        {menuActive && (
          <motion.div
            className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
            initial={{
              opacity: 0,
              scale: 0.95
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.1, ease: 'easeOut' }
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              transition: { duration: 0.075, ease: 'easeIn' }
            }}
          >
            <div className="py-1" role="none">
              <a
                href="#"
                className="font-medium text-gray-900 block px-4 py-2 text-sm bg-gray-300"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
              >
                Most Popular
              </a>

              <a
                href="#"
                className="text-gray-500 block px-4 py-2 text-sm hover:bg-gray-200"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-2"
              >
                Newest
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
