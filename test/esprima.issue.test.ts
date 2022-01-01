import { expect, test } from '@jest/globals'
import { parseModule, parseScript } from '../src/esprima';

test('esprima -#2034 - test', () => {
    let code = `const obj1 = { key: "value"};
    const obj2 = { ...obj1, key2: "value"};`;
    let ast = parseModule(code);
});
