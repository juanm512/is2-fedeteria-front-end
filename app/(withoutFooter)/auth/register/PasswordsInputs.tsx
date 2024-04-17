'use client';

import { Check, HelpCircleIcon, X } from 'lucide-react';
import { useState } from 'react';

const initialState = {
  lenValid: false,
  lowerValid: false,
  upperValid: false,
  numberValid: false
};

export default function PwsInputs() {
  const [pw, setPw] = useState<string>('');
  const [pwsEquals, setPwsEquals] = useState<boolean>(false);
  const [state, setState] = useState(initialState);

  const equalPws = (e: { currentTarget: { value: string } }) => {
    setPwsEquals(pw === e.currentTarget.value);
  };

  const validatePw = (e: { currentTarget: { value: string } }) => {
    const containsNumber = (ch: string) => /[0-9]/.test(ch);
    const containsUppercase = (ch: string) => /[A-Z]/.test(ch);
    const containsLowercase = (ch: string) => /[a-z]/.test(ch);
    // const containsSpecialChar = (ch: string) =>
    //   /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/.test(ch);
    let countOfUpperCase = 0,
      countOfLowerCase = 0,
      countOfNumbers = 0;
    //   countOfSpecialChar = 0;
    for (let i = 0; i < e.currentTarget.value.length; i++) {
      let ch = e.currentTarget.value.charAt(i);
      if (containsNumber(ch)) countOfNumbers++;
      else if (containsUppercase(ch)) countOfUpperCase++;
      else if (containsLowercase(ch)) countOfLowerCase++;
      //   else if (containsSpecialChar(ch)) countOfSpecialChar++;
    }

    setState({
      lenValid: e.currentTarget.value.length >= 6,
      lowerValid: countOfLowerCase >= 1,
      upperValid: countOfUpperCase >= 1,
      numberValid: countOfNumbers >= 1
    });
    setPw(e.currentTarget.value);
  };

  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor="password"
          className="flex items-end justify-between text-sm font-medium leading-6 text-gray-900"
        >
          Contraseña
          <div className="size-4 group relative inline-flex justify-center items-center gap-2 rounded-full bg-gray-50 border border-gray-200 text-gray-600 hover:bg-blue-50 hover:border-blue-200 hover:text-accent-600 ">
            <HelpCircleIcon />
            <div
              className="group absolute hidden bottom-full mb-1 flex-col justify-start w-56 z-10 py-1 px-2 bg-gray-900/70 text-xs text-start font-medium text-white opacity-0 transition-opacity rounded shadow-sm group-hover:opacity-100 group-hover:flex"
              role="tooltip"
            >
              Tu contraseña debe contener:
              <p
                className={
                  'flex items-center gap-2 w-full font-light' +
                  (state.lenValid ? ' text-green-200' : ' text-red-200')
                }
              >
                {state.lenValid ? <Check width={10} /> : <X width={10} />}
                <span>Minimo 6 caracteres.</span>
              </p>
              <p
                className={
                  'flex items-center gap-2 w-full font-light' +
                  (state.lowerValid ? ' text-green-200' : ' text-red-200')
                }
              >
                {state.lowerValid ? <Check width={10} /> : <X width={10} />}
                <span>Debe tener al menos 1 letra minusculas.</span>
              </p>
              <p
                className={
                  'flex items-center gap-2 w-full font-light' +
                  (state.upperValid ? ' text-green-200' : ' text-red-200')
                }
              >
                {state.upperValid ? <Check width={10} /> : <X width={10} />}
                <span>Debe tener al menos 1 letra Mayuscula.</span>
              </p>
              <p
                className={
                  'flex items-center gap-2 w-full font-light' +
                  (state.numberValid ? ' text-green-200' : ' text-red-200')
                }
              >
                {state.numberValid ? <Check width={10} /> : <X width={10} />}
                <span>Debe tener al menos 1 numero.</span>
              </p>
            </div>
          </div>
        </label>
        <div className="mt-2">
          <input
            value={pw}
            onChange={validatePw}
            id="password"
            name="password"
            type="password"
            autoComplete="password"
            className={
              'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' +
              (Object.values(state).every((value) => value)
                ? ' text-green-600 focus:ring-green-600'
                : ' text-red-600 focus:ring-red-600')
            }
            required
          />
        </div>
      </div>
      <div className="sm:col-span-3">
        <label
          htmlFor="repeat_password"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Repetir Contraseña
        </label>
        <div className="mt-2">
          <input
            onChange={equalPws}
            id="repeat_password"
            name="repeat_password"
            type="password"
            autoComplete="repeat_password"
            className={
              'block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none hover:ring-1 hover:ring-accent-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' +
              (pwsEquals
                ? ' text-green-600 focus:ring-green-600'
                : ' text-red-600 focus:ring-red-600')
            }
            required
          />
        </div>
      </div>
    </>
  );
}
