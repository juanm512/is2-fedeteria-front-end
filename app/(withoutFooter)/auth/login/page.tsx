import Image from 'next/image';
import Link from 'next/link';

import PasswordInput from './PasswordInput';
import LogInForm from './LogInForm';
import { SubmitButton } from '../register/SubmitButton';

export default async function IndexPage() {
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
        <LogInForm>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          {/* <div>
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
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div> */}

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
                  className="font-semibold text-primary-600 hover:text-primary-500"
                >
                  ¿La olvidaste?
                </Link>
              </div>
            </div>
            <div className="mt-2 relative">
              <PasswordInput />
            </div>
          </div>

          <div>
            <SubmitButton
              className="relative w-full bg-secondary-800 rounded-lg transition-all duration-200 hover:-translate-y-1 disabled:opacity-30 disabled:select-none disabled:cursor-not-allowed disabled:pointer-events-none"
              pendingComponent={
                <span className="flex justify-center gap-4 w-full px-6 py-2 text-lg font-bold bg-primary-500 items-center rounded-sm transition-transform duration-200 hover:-translate-y-1 ">
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: '0.2s' }}
                  >
                    .
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: '0.5s' }}
                  >
                    .
                  </span>
                  <span
                    className="animate-bounce"
                    style={{ animationDelay: '0.4s' }}
                  >
                    .
                  </span>
                </span>
              }
              submitComponent={
                <span className="flex w-full px-6 py-2 text-base font-medium bg-primary-500 items-center justify-center rounded-md transition-transform duration-200 hover:-translate-y-1 ">
                  Iniciar sesión
                </span>
              }
            />
            {/* <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
            >
              Iniciar sesión
            </button> */}
          </div>
        </LogInForm>

        <p className="mt-10 text-center text-sm text-gray-500">
          ¿No tenes usuario?
          <Link
            href="/auth/register"
            className="ml-2 font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            Registrate acá
          </Link>
        </p>
      </div>
    </div>
  );
}
