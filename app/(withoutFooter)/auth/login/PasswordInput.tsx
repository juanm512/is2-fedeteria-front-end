'use client';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

export default function PasswordInput() {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <input
        id="password"
        name="password"
        type={visible ? 'text' : 'password'}
        autoComplete="current-password"
        required
        className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
      />
      <button
        type="button"
        onClick={() => setVisible((prev) => !prev)}
        className="absolute right-0 top-0 flex h-full p-1.5 items-center rounded-md opacity-70 hover:opacity-100 hover:bg-secondary-500/30"
      >
        {visible ? <EyeOffIcon /> : <EyeIcon />}
      </button>
    </>
  );
}
