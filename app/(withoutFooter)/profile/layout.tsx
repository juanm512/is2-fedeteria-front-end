export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full">
      <SideBar />
      {children}
    </div>
  );
}

import Link from 'next/link';

function SideBar() {
  return (
    <nav className="flex flex-col w-[30rem] flex-shrink-0 gap-4 px-16 py-24 text-sm text-text-800">
      <h1 className="text-3xl font-bold tracking-tight text-text-800">
        Hola, NOMBRE USUARIO
      </h1>

      <Link href="#" className="font-semibold text-primary">
        Tus datos
      </Link>
      <Link href="#">Editar perfil</Link>
      <Link href="#">Mis productos(se abre un sub menu)</Link>
      <Link href="#">Mis truques (se abre un sub menu)</Link>
      <Link href="#">Promociones</Link>
      <Link href="#">algo raro</Link>
    </nav>
  );
}
