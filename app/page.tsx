import { Card, Title, Text } from '@tremor/react';

import UsersTable from '../components/table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage() {
  return (
    <>
      {/* <header className="bg-background-800 shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header> */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          -- Your content --
        </div>
      </main>
    </>
  );
}
