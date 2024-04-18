'use client';

import { useFormState } from 'react-dom';
import { login } from '../actions';

export default function LogInForm({ children }: { children: React.ReactNode }) {
  const [error, formAction] = useFormState(login, '');

  return (
    <form className="space-y-6" action={formAction}>
      {children}
      {error !== '' && (
        <p className="text-center text-red-600 text-sm">{error}</p>
      )}
    </form>
  );
}
