import { parse } from '../../dist/esm/esprima'

// declared here but will NOT be imported elsewhere
export const esprimaParse = (s) => parse(s)

export const foo = 'bar'
