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

test('esprima-next - #28 - simple ; ', () => {
    let code = `
    class ComputedRefImpl {
        ['a'+'b']=4;
    }`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #28 - simple 2; ', () => {
    let code = `
    class A {static ["prototype"](){}}`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #28 - Unexpected token ; ', () => {
    let code = `
    class ComputedRefImpl {
        _setter;
        _value;
        _dirty = true;
        effect;
        __v_isRef = true;
        ["__v_isReadonly" /* IS_READONLY */];
        constructor(getter, _setter, isReadonly) {
            this._setter = _setter;
            this.effect = effect(getter, {
                lazy: true,
                scheduler: () => {
                    if (!this._dirty) {
                        this._dirty = true;
                        trigger(toRaw(this), "set" /* SET */, 'value');
                    }
                }
            });
            this["__v_isReadonly" /* IS_READONLY */] = isReadonly;
        }
        get value() {
            // the computed ref may get wrapped by other proxies e.g. readonly() #3376
            const self = toRaw(this);
            if (self._dirty) {
                self._value = this.effect();
                self._dirty = false;
            }
            track(self, "get" /* GET */, 'value');
            return self._value;
        }
        set value(newValue) {
            this._setter(newValue);
        }
    }`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #30 - Spread fails', () => {
    let code = `
    function a(args = {}) {
        let { callbackOK, callbackERROR, ...argsWS } = args;

    }`;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

test('esprima-next - #32 - Decorators', () => {
    let code = `
@ClassDec
class Test {
    @MthDec
    Mth1() {

    }

    @PropDec
    Prop = 'Test'

    @AccDec
	get Prop2() {
    	return 'a';
    }
}
    `;
    let ast = parseModule(code);
    expect(ast).not.toBeNull();
});

