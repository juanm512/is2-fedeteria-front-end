'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavStore } from '@/lib/utils/stores/nav';

export default function MobileContainer({
  children,
  menu
}: {
  children: React.ReactNode;
  menu: string;
}) {
  const { menuOpen } = useNavStore();
  return (
    <AnimatePresence mode="wait">
      {menuOpen === menu && (
        <motion.div
          initial={{
            height: '0',
            opacity: 0.7
          }}
          exit={{
            height: '0',
            opacity: 0.7,
            transition: {
              duration: 0.1,
              delay: 0.05,
              ease: 'easeOut'
            }
          }}
          animate={{
            height: 'auto',
            opacity: 1,
            transition: {
              duration: 0.2,
              delay: 0.1,
              ease: 'easeIn'
            }
          }}
          className="absolute block sm:hidden z-20 -ml-2 w-screen bg-secondary-700 top-16 overflow-hidden"
          id="mobile-menu"
        >
          {/* {menuOpen + menu} */}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
