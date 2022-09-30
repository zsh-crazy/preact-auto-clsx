import clsx from 'clsx';
export const hasOwnProperty = Object.prototype.hasOwnProperty;
export const transformProps = function(props)  {
  if (props  && hasOwnProperty.call(props, 'className')) {
    return {...props, className:clsx(props.className)};
  }
  return props || {};
}




