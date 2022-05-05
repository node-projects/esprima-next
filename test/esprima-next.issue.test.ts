import { expect, test } from '@jest/globals'
import { parseModule, parseScript } from '../src/esprima';

test('esprima-next - #1 - test', () => {
    let code = `import* \\u0061s self from "./escaped-as-namespace-import.js";`;
    expect(() => parseModule(code)).toThrow();
});

test('esprima-next - #19 - import assertions - 1 - test', () => {
    let code = `import foo from "./foo.json" assert { type: "json" }
    let a=2;`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #19 - import assertions - 2 - test', () => {
    let code = `import("./foo.json", { assert: { type: "json" }}).then(x => {})`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - private in', () => {
    let code = `
class aa {
    #bb
    cc(dd) {
        let b = #bb in dd;
    }
}`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #20 - static blocks - test', () => {
    let code = `
class aa {
    static qq() {
    }
    static staticProperty1 = 'Property 1';
    static staticProperty2;
    static {
      this.staticProperty2 = 'Property 2';
    }
    static staticProperty3;
    static {
      this.staticProperty3 = 'Property 3';
    }
}`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #29 - assignment of class declaration fails on super keyword', () => {
    let code = `e = class D extends Date { constructor() { super() } }`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});
