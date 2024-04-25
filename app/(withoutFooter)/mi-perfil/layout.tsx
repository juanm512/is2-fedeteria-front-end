import { createClient } from '@/lib/utils/supabase/server';
import {
  Bell,
  BookX,
  Boxes,
  ChevronsUp,
  Edit3,
  HandCoins,
  HandHelping,
  Handshake,
  ListTodo,
  LogOut,
  LucideGitCompareArrows,
  UserCircle
} from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/auth/login');
  }

  return (
    <div className="flex flex-row w-full">
      <SideBar />
      {children}
    </div>
  );
}

function SideBar() {
  return (
    <nav className="relative basis-4/12 h-screen">
      <div className="fixed z-0 top-0 h-screen max-w-[24rem] w-full border-background-700 flex flex-col flex-shrink-0 gap-1 px-12 pt-16 pb-8 text-base text-text-800 bg-background-900/10">
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav className="-mx-3 space-y-6 ">
            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-400 uppercase">
                Tu perfil
              </label>

              <a
                className="flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg bg-primary-200 text-gray-700"
                href="#"
              >
                <UserCircle className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Mis datos</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Edit3 className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Editar perfil</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <ListTodo className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Lista deseados</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Bell className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Notificaciones</span>
              </a>
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-400 uppercase">
                Productos
              </label>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Boxes className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Mis productos</span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <LucideGitCompareArrows className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">
                  Productos intercambiados
                </span>
              </a>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <ChevronsUp className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Promociones</span>
              </a>
            </div>

            <div className="space-y-3 ">
              <label className="px-3 text-xs text-gray-400 uppercase">
                Intercambios
              </label>

              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <HandHelping className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">En proceso</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <Handshake className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Terminados</span>
              </a>
              <a
                className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
                href="#"
              >
                <BookX className="w-5 h-5" />

                <span className="mx-2 text-sm font-medium">Cancelados</span>
              </a>
            </div>
          </nav>
          <div className="mt-6 flex flex-col gap-2">
            <div className="pl-2">
              <h1 className="text-3xl font-bold tracking-tight text-text-800">
                Jhon Doe
              </h1>
              <p className="text-sm text-text-600">email@gmail.com</p>
            </div>
            <a
              className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <LogOut className="w-5 h-5" />

              <span className="mx-2 text-sm font-medium">Cerrar sesion</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
