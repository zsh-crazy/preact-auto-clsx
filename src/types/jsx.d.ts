import { JSX as _JSX } from "preact/jsx-runtime";
import { ClassValue } from 'clsx';
type WithConditionalCSSProp<P> = 'className' extends keyof P
  ? string extends P['className' & keyof P]
  ? { className?: ClassValue }
  : {}
  : {};



type PreactJSXLibraryManagedAttributes<C, P> = _JSX.LibraryManagedAttributes<
  C,
  P
>;
type PreactJSXIntrinsicAttributes = _JSX.IntrinsicAttributes;

type PreactJSXIntrinsicElements = _JSX.IntrinsicElements;

export namespace JSX {
  type LibraryManagedAttributes<C, P> = WithConditionalCSSProp<P> &
    PreactJSXLibraryManagedAttributes<C, P>;
  type IntrinsicElements = {
    [K in keyof PreactJSXIntrinsicElements]: Omit<
      PreactJSXIntrinsicElements[K],
      'className'
    > & {
      className?: ClassValue;
    };
  };
}

