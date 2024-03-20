import { Card, Title, Text } from '@tremor/react';

import UsersTable from '@/components/table';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default async function IndexPage({
  searchParams
}: {
  searchParams: { q: string };
}) {
  const search = searchParams.q ?? '';

  const users = [
    {
      id: 1,
      name: 'juan',
      username: 'juanm512',
      email: '512juanm@gmail.com'
    },
    {
      id: 12,
      name: 'Renzo',
      username: 'renZovich',
      email: 'ren.zo@gmail.com'
    },
    {
      id: 13,
      name: 'fermin',
      username: 'MinFer',
      email: 'min.fer.max@gmail.com'
    },
    {
      id: 14,
      name: 'alvarro',
      username: 'alvaroPapas',
      email: 'alvarro.lp@gmail.com'
    }
  ];

  return (
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Title>Users</Title>
      <Text>A list of users retrieved from a Postgres database.</Text>

      <Card className="mt-6">
        <UsersTable users={users} />
      </Card>
    </main>
  );
}
