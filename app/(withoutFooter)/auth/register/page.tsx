import Image from 'next/image';
import Link from 'next/link';

import type { Metadata } from 'next';

import { signup } from '../actions';

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
            className="ml-2 font-semibold leading-6 text-accent-600 hover:text-accent-500"
          >
            Inicia sesión acá
          </Link>
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-2xl">
        <form action={signup}>
          <div className="space-y-12">
            {/* 
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-accent-600 sm:max-w-md">
                      <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                        workcation.com/
                      </span>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 px-2 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="janesmith"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    About
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Photo
                  </label>
                  <div className="mt-2 flex items-center gap-x-3">
                    <UserCircle
                      className="h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <button
                      type="button"
                      className="rounded-md bg-white px-2.5 py-1.5 px-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="cover-photo"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Cover photo
                  </label>
                  <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                    <div className="text-center">
                      <IconPhoto
                        className="mx-auto h-12 w-12 text-gray-300"
                        aria-hidden="true"
                      />
                      <div className="mt-4 flex text-sm leading-6 text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-semibold text-accent-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-accent-600 focus-within:ring-offset-2 hover:text-accent-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs leading-5 text-gray-600">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

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
                      pattern="[0-9]{3,4}[0-9]{6}"
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
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Preferencias
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Esta informacion podra ser modificada luego.
              </p>

              <div className="mt-10 space-y-10">
                <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Sucursal preferida
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    Selecciona una sucursal de la lista. Todas estan en la
                    provincia de Buenos Aires.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2">
                    <label
                      htmlFor="sucursal-capital-federal"
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-accent-500 focus-within:border-accent-500 focus-within:ring-accent-500 has-[:checked]:bg-accent-100 has-[:checked]:text-accent-900 has-[:checked]:border-accent-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-capital-federal"
                        value="capital-federal"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 peer-checked:text-accent-700 brightness-125">
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
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-accent-500 focus-within:border-accent-500 focus-within:ring-accent-500 has-[:checked]:bg-accent-100 has-[:checked]:text-accent-900 has-[:checked]:border-accent-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-la-plata"
                        value="la-plata"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 peer-checked:text-accent-700 brightness-125">
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
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-accent-500 focus-within:border-accent-500 focus-within:ring-accent-500 has-[:checked]:bg-accent-100 has-[:checked]:text-accent-900 has-[:checked]:border-accent-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-chivilcoy"
                        value="chivilcoy"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 peer-checked:text-accent-700 brightness-125">
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
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-accent-500 focus-within:border-accent-500 focus-within:ring-accent-500 has-[:checked]:bg-accent-100 has-[:checked]:text-accent-900 has-[:checked]:border-accent-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-dolores"
                        value="dolores"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 peer-checked:text-accent-700 brightness-125">
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
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-accent-500 focus-within:border-accent-500 focus-within:ring-accent-500 has-[:checked]:bg-accent-100 has-[:checked]:text-accent-900 has-[:checked]:border-accent-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-berazategui"
                        value="berazategui"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 peer-checked:text-accent-700 brightness-125">
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
                      className="flex items-center p-3 w-full bg-white border border-gray-200 rounded-lg hover:border-accent-500 focus-within:border-accent-500 focus-within:ring-accent-500 has-[:checked]:bg-accent-100 has-[:checked]:text-accent-900 has-[:checked]:border-accent-500"
                    >
                      <input
                        type="radio"
                        id="sucursal-bahia-blanca"
                        value="bahia-blanca"
                        name="sucursal"
                        className="peer shrink-0 mt-0.5 h-fit rounded-full accent-accent-700 focus:ring-0 focus:ring-accent-500 disabled:opacity-50 disabled:pointer-events-none"
                      />
                      <p className="ms-3 select-none text-gray-800 peer-checked:text-accent-700 brightness-125">
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
              {/* <h2 className="text-base font-semibold leading-7 text-gray-900">
                Notifications
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                We&apos;ll always let you know about important changes, but you
                pick what else you want to hear about.
              </p> */}

              <div className="mt-10 space-y-10">
                <fieldset>
                  {/* <legend className="text-sm font-semibold leading-6 text-gray-900">
                    By Email
                  </legend> */}
                  <div className="space-y-6">
                    <div className="relative flex gap-x-3">
                      <div className="flex h-6 items-center">
                        <input
                          id="policies_and_conditions"
                          name="policies_and_conditions"
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 accent-accent-400 focus:ring-accent-600"
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
                          <Link href="/" className="text-accent-600 underline">
                            Politicas de privacidad
                          </Link>{' '}
                          y nuestros{' '}
                          <Link href="/" className="text-accent-600 underline">
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
                          className="h-4 w-4 rounded border-gray-300 accent-accent-400 focus:ring-accent-600"
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
                {/* <fieldset>
                  <legend className="text-sm font-semibold leading-6 text-gray-900">
                    Push Notifications
                  </legend>
                  <p className="mt-1 text-sm leading-6 text-gray-600">
                    These are delivered via SMS to your mobile phone.
                  </p>
                  <div className="mt-6 space-y-6">
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-everything"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-accent-600 focus:ring-accent-600"
                      />
                      <label
                        htmlFor="push-everything"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Everything
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-email"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-accent-600 focus:ring-accent-600"
                      />
                      <label
                        htmlFor="push-email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Same as email
                      </label>
                    </div>
                    <div className="flex items-center gap-x-3">
                      <input
                        id="push-nothing"
                        name="push-notifications"
                        type="radio"
                        className="h-4 w-4 border-gray-300 text-accent-600 focus:ring-accent-600"
                      />
                      <label
                        htmlFor="push-nothing"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        No push notifications
                      </label>
                    </div>
                  </div>
                </fieldset> */}
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <SubmitButton
              className="relative bg-secondary-800 rounded-md transition-all duration-200 hover:-translate-y-1 disabled:opacity-30 disabled:select-none disabled:cursor-not-allowed disabled:pointer-events-none"
              pendingComponent={
                <span className="flex justify-center gap-4 w-48 px-6 py-2 text-lg font-bold bg-accent-500 items-center rounded-sm transition-transform duration-200 hover:-translate-y-1 ">
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
                <span className="flex w-48 px-6 py-2 text-base font-medium bg-accent-500 items-center justify-center rounded-sm transition-transform duration-200 hover:-translate-y-1 ">
                  Registrarme
                </span>
              }
            />
            {/* <button
            type="submit"
              // className="rounded-md bg-accent-600 w-48 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-600"
             className="relative bg-secondary-800 rounded-md transition-all duration-200 hover:-translate-y-1"
          >

            </button> */}
          </div>
        </form>
      </div>
    </div>
  );
}
