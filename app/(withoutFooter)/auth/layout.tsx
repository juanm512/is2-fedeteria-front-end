import { createClient } from '@/lib/utils/supabase/server';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data, error } = await supabase.auth.getUser();

  if (data?.user) {
    redirect('/mi-perfil');
  }

  return <>{children}</>;
}
