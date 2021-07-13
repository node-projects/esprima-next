import { expect, test } from '@jest/globals'
import { parseModule } from '../src/esprima'

test('esprima-next - #1 - test', () => {
    let code = `import* \\u0061s self from "./escaped-as-namespace-import.js";`;
    expect(() => parseModule(code)).toThrow();
});
