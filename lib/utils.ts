import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const setURLParams = (searchParams: {
  [key: string]: string | string[] | undefined;
}) => {
  let paramsArray: string[][] = [];
  Object.entries(searchParams).forEach((entrie) => {
    if (entrie[1] !== undefined) {
      typeof entrie[1] !== 'string'
        ? entrie[1].forEach((value) => paramsArray.push([entrie[0], value]))
        : paramsArray.push([entrie[0], entrie[1]]);
    }
  });
  // console.log(paramsArray);

  let newParams =
    paramsArray.length == 0
      ? new URLSearchParams()
      : new URLSearchParams(paramsArray);

  // newParams.delete('orderBy');
  // console.log(newParams.toString());
  // newParams.delete('sucursal', 'la_plata');
  // console.log(newParams.has('sucursal', 'la_plata'));
  // newParams.append('sucursal', 'la_plata');
  // console.log(newParams.has('sucursal', 'la_plata'));
  // newParams.set('sucursal', 'la_plata');
  // console.log(newParams.toString());

  return newParams;
};
