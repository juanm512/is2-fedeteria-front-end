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
    <nav className="relative basis-4/12 max-w-[28rem] h-screen">
      <div className="fixed z-0 top-0 h-screen border-background-700 flex flex-col flex-shrink-0 gap-4 px-12 py-24 text-base text-text-800 bg-background-500/10">
        <h1 className="text-3xl font-bold tracking-tight text-text-800">
          Hola, NOMBRE USUARIO
        </h1>

        <Link href="#" className="font-semibold text-primary ml-4">
          Tus datos
        </Link>
        <Link href="#">Editar perfil</Link>
        <Link href="#">Mis productos(se abre un sub menu)</Link>
        <Link href="#">Mis truques (se abre un sub menu)</Link>
        <Link href="#">Promociones</Link>
        <Link href="#">algo raro</Link>
      </div>
    </nav>
  );
}
