import { expect, test } from '@jest/globals'
import { parseModule, parseScript } from '../src/esprima';

test('esprima-next - #1 - test', () => {
    let code = `import* \\u0061s self from "./escaped-as-namespace-import.js";`;
    expect(() => parseModule(code)).toThrow();
});


test('esprima-next - #2 - test', () => {
    let code = `var A = class { constructor() { super(); } }`;
    expect(() => parseScript(code)).toThrow();
});
