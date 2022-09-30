
import { Fragment, jsx as _jsx, jsxs as _jsxs,jsxDEV as _jsxDEV } from 'preact/jsx-runtime';

import {transformProps} from "./utils/index"

function jsx(type, props, key){
  return _jsx(type,transformProps(props),key)
}
function jsxs(type, props,key){
  return _jsxs(type,transformProps(props),key)
}

function jsxDEV(type, props, key){
  return _jsxDEV(type,transformProps(props),key)
}

export { Fragment, jsx, jsxs,jsxDEV };
