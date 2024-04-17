'use client';

import { useFormState } from 'react-dom';
import { signup } from '../actions';

const initialState: string[] = [];

export default function SignUpForm({
  children
}: {
  children: React.ReactNode;
}) {
  const [errors, formAction] = useFormState(signup, initialState);
  console.log(errors);
  return (
    <form action={formAction}>
      {children}
      {errors && (
        <ul className="flex flex-col justify-start gap-1">
          {errors.map((error: string) => (
            <p key={error} className="text-red-600 text-sm">
              {error}
            </p>
          ))}
        </ul>
      )}
    </form>
  );
}
