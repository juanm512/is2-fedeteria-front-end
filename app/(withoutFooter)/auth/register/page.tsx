import Image from 'next/image';
import Link from 'next/link';

import type { Metadata } from 'next';

import SignUpForm from './SignUpForm';
import PwsInputs from './PasswordsInputs';
import { SubmitButton } from './SubmitButton';

export const metadata: Metadata = {
  title: 'Creá tu cuenta | Fedeteria',
  description:
    'Formulario para la creacion de cuentas de usuario en la Fedeteria'
};

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
          Creá tu cuenta
        </h2>
        <p className="mt-1 text-center text-sm text-gray-500">
          ¿Ya tenes usuario?
          <Link
            href="/auth/register"
            className="ml-2 font-semibold leading-6 text-primary-600 hover:text-primary-500"
          >
            Inicia sesión acá
          </Link>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
        <SignUpForm>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Ingresá tus datos
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Email y DNI no pueden ser modificados más adelante.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nombre
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Hugo"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 outline-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Apellido
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="Bermudez"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 outline-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-2">
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
                      inputMode="numeric"
                      pattern="[0-9\s]{7,8}"
                      placeholder="xxxxxxxx"
                      autoComplete="dni"
                      className="block w-full rounded-md border-0 outline-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-4"></div>
                <div className="sm:col-span-4">
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
                      placeholder="example@host.com"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 outline-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Numero de telefono
                  </label>
                  <div className="mt-2">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9]{3,5}[0-9]{6}"
                      inputMode="numeric"
                      placeholder="xxxx xxxxxx"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 outline-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
                      required
                    />
                  </div>
                </div>
                <div className="sm:col-span-3" />
                <PwsInputs />
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              {/* <h2 className="text-base font-semibold leading-7 text-gray-900">
                Preferencias
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Esta informacion podra ser modificada luego.
              </p> */}

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-base font-semibold leading-6 text-gray-900">
                    Sucursal preferida
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Selecciona una sucursal de la lista.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <label
                      htmlFor="sucursal-capital-federal"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-primary-500 focus-within:border-primary-500 focus-within:ring-primary-500 has-[:checked]:bg-primary-100 has-[:checked]:text-primary-900 has-[:checked]:border-primary-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-capital-federal"
                        value="capital-federal"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800">
                        <span className="block text-sm font-semibold ">
                          Capital Federal
                        </span>
                        <span className="block text-sm opacity-70">
                          Calle fafsuvifa, 483 e/ 4 y 5
                        </span>
                      </p>
                    </label>

                    <label
                      htmlFor="sucursal-la-plata"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-primary-500 focus-within:border-primary-500 focus-within:ring-primary-500 has-[:checked]:bg-primary-100 has-[:checked]:text-primary-900 has-[:checked]:border-primary-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-la-plata"
                        value="la-plata"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-primary-700 focus:ring-0 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800">
                        <span className="block text-sm font-semibold ">
                          La Plata
                        </span>
                        <span className="block text-sm opacity-70">
                          Calle 55, 483 e/ 4 y 5
                        </span>
                      </p>
                    </label>

                    <label
                      htmlFor="sucursal-chivilcoy"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-primary-500 focus-within:border-primary-500 focus-within:ring-primary-500 has-[:checked]:bg-primary-100 has-[:checked]:text-primary-900 has-[:checked]:border-primary-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-chivilcoy"
                        value="chivilcoy"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-800 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 ">
                        <span className="block text-sm font-semibold ">
                          Chivilcoy
                        </span>
                        <span className="block text-sm opacity-70">
                          Calle 25 de mayo, altura 212
                        </span>
                      </p>
                    </label>

                    <label
                      htmlFor="sucursal-dolores"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-primary-500 focus-within:border-primary-500 focus-within:ring-primary-500 has-[:checked]:bg-primary-100 has-[:checked]:text-primary-900 has-[:checked]:border-primary-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-dolores"
                        value="dolores"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800">
                        <span className="block text-sm font-semibold ">
                          Dolores
                        </span>
                        <span className="block text-sm opacity-70">
                          Calle fafsuvifa
                        </span>
                      </p>
                    </label>

                    <label
                      htmlFor="sucursal-berazategui"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-primary-500 focus-within:border-primary-500 focus-within:ring-primary-500 has-[:checked]:bg-primary-100 has-[:checked]:text-primary-900 has-[:checked]:border-primary-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-berazategui"
                        value="berazategui"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800">
                        <span className="block text-sm font-semibold ">
                          Berazategui
                        </span>
                        <span className="block text-sm opacity-70">
                          Calle fafsuvifa
                        </span>
                      </p>
                    </label>

                    <label
                      htmlFor="sucursal-bahia-blanca"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-primary-500 focus-within:border-primary-500 focus-within:ring-primary-500 has-[:checked]:bg-primary-100 has-[:checked]:text-primary-900 has-[:checked]:border-primary-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-bahia-blanca"
                        value="bahia-blanca"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800">
                        <span className="block text-sm font-semibold ">
                          Bahia Blanca
                        </span>
                        <span className="block text-sm opacity-70">
                          Calle fafsuvifa
                        </span>
                      </p>
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 space-y-10">
                <fieldset>
                  <div className="space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="policies_and_conditions"
                          name="policies_and_conditions"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 accent-primary-400 focus:ring-primary-600"
                          required
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="policies_and_conditions"
                          className="font-medium text-gray-900"
                        >
                          Politicas y terminos
                        </label>
                        <p className="text-gray-500">
                          Para crear su cuenta debe estar de acuerdo con
                          nuestras{' '}
                          <Link href="/" className="text-primary-600 underline">
                            Politicas de privacidad
                          </Link>{' '}
                          y nuestros{' '}
                          <Link href="/" className="text-primary-600 underline">
                            Terminos de servicio
                          </Link>
                        </p>
                      </div>
                    </div>

                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 accent-primary-400 focus:ring-primary-600"
                        />
                      </div>
                      <div className="text-sm leading-6">
                        <label
                          htmlFor="offers"
                          className="font-medium text-gray-900"
                        >
                          Ofertas y promociones
                        </label>
                        <p className="text-gray-500">
                          Obtener notificaciones de ofertas o promociones de
                          productos de la Fedeteria.
                        </p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <SubmitButton
              className="relative bg-secondary-800 rounded-md transition-all duration-200 hover:-translate-y-1 disabled:opacity-30 disabled:select-none disabled:cursor-not-allowed disabled:pointer-events-none"
              pendingComponent={
                <span className="flex justify-center gap-4 w-48 px-6 py-2 text-lg font-bold bg-primary-500 items-center rounded-sm transition-transform duration-200 hover:-translate-y-1 ">
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
                <span className="flex w-48 px-6 py-2 text-base font-medium bg-primary-500 items-center justify-center rounded-sm transition-transform duration-200 hover:-translate-y-1 ">
                  Registrarme
                </span>
              }
            />
          </div>
        </SignUpForm>
      </div>
    </div>
  );
}
