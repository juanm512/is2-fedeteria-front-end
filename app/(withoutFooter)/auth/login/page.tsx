import { EyeIcon, EyeOffIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default async function IndexPage() {
  // const pathname = usePathname();
  // const { origin } = window.location;
  // console.log(origin);

  // const supabase = createClient();
  // const logIn = async () => {
  //   await supabase.auth.signInWithOAuth({
  //     provider: "google",
  //     options: {
  //       redirectTo: origin + "/auth/callback?next=" + pathname,
  //     },
  //   });
  // };
  return (
    <div className="flex min-h-full flex-col justify-center my-auto px-6 py-24 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Image
          width={100}
          height={100}
          className="h-fit w-fit object-contain"
          src="/fedeteria_logos/Fedeteria_Horizontal.svg"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-3xl font-semibold leading-9 tracking-tight text-gray-900">
          Inicia Sesion en tu cuenta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label
              htmlFor="dni"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              DNI
            </label>
            <div className="mt-2">
              <input
                id="dni"
                name="dni"
                type="text"
                autoComplete="dni"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Contraseña
              </label>
              <div className="text-sm">
                <Link
                  href="/auth/forgot-password"
                  className="font-semibold text-accent-600 hover:text-accent-500"
                >
                  ¿La olvidaste?
                </Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
              />
              <button className="absolute right-0 top-0 flex h-full p-1.5 items-center rounded-md opacity-70 hover:opacity-100 hover:bg-secondary-500/30">
                <EyeIcon />
                {/* <EyeOffIcon /> */}
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-accent-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
            >
              Iniciar sesión
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No tenes usuario?
          <Link
            href="/auth/register"
            className="ml-2 font-semibold leading-6 text-accent-600 hover:text-accent-500"
          >
            Registrate acá
          </Link>
        </p>
      </div>
    </div>
  );
}
