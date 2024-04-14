'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { useNavStore } from '@/lib/utils/stores/nav';

export default function MobileContainer({
  children,
  menu,
  wClass
}: {
  children: React.ReactNode;
  menu: string;
  wClass?: string;
}) {
  const { menuOpen } = useNavStore();
  return (
    <AnimatePresence mode="wait">
      {menuOpen === menu && (
        <motion.div
          initial={{
            height: '0',
            opacity: 0
          }}
          exit={{
            height: '0',
            opacity: 0,
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
          className={
            'absolute hidden sm:block right-0 z-10 origin-top-right rounded-b-md bg-secondary-700 top-16 shadow-lg ' +
            (wClass || ' w-48')
          }
          style={{ overflow: 'hidden' }}
          id="floating-menu"
        >
          {/* {menuOpen + menu} */}
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
