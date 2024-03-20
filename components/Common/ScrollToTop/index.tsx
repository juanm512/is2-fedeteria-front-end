'use client';
import { IconArrowUpRhombus } from '@tabler/icons-react';
import { useCallback, useEffect, useState } from 'react';

export default function ScrollToTop() {
  const [yScroll, setYScroll] = useState(0);

  const handleScroll = (event: any) => {
    console.log(`scroll detected: `, event);
    setYScroll(window.scrollY);
    return;
  };

  useEffect(() => {
    window.addEventListener('scrollend', handleScroll);
    return () => window.removeEventListener('scrollend', handleScroll);
  }, [handleScroll]);

  return (
    // yScroll > 0 && (
    <button
      data-state={yScroll > 50 ? 'scrolled' : 'top'}
      onClick={() => window.scrollTo(0, 0)}
      className="fixed bottom-2 right-2 p-1 bg-accent-500 rounded-2xl border transition-all duration-500 hover:-translate-y-1 data-[state=scrolled]:translate-y-0 data-[state=top]:translate-y-16 data-[state=scrolled]:opacity-100 data-[state=top]:opacity-0"
    >
      <IconArrowUpRhombus className="w-10 h-10 stroke-text-800" />
    </button>
    // )
  );
}
