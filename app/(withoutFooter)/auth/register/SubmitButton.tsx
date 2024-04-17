'use client';

import { useFormStatus } from 'react-dom';

export function SubmitButton({
  pendingComponent,
  submitComponent,
  className
}: {
  pendingComponent: JSX.Element;
  submitComponent: JSX.Element;
  className: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending} className={className}>
      {pending ? pendingComponent : submitComponent}
    </button>
  );
}
