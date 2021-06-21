import { expect, test } from '@jest/globals'
import { parse } from '../src/esprima'

test('invalid syntax test', () => {
    let code = `i #= 42`;

    expect(() => parse(code)).toThrow();
});

test('generator test', () => {
    let code = `class X { *g() {} }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('async generator test', () => {
    let code = `class X { async *g() {} }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('async private generator test', () => {
    let code = `class X { async *#g() {} }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('no newline test', () => {
    let code = `class A {a static(){}}`;

    expect(() => parse(code)).toThrow();
});

test('newline test', () => {
    let code = `class A {a
        static(){}}`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('async test newline', () => {
    let code = `class X { static async
        f(){} }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class function test', () => {
    let code = `
        class aa {
            bb() {

            };
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class private function test', () => {
    let code = `
        class aa {
            #bb() {

            };
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class static function test', () => {
    let code = `
        class aa {
            static bb() {

            };
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class static private function test', () => {
    let code = `
        class aa {
            static #bb() {

            };
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});


test('Class getter/setter test', () => {
    let code = `
        class aa {
            set #bb(value) {

            };
            get #bb() {

            };
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class property test', () => {
    let code = `
        class aa {
            bb;
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});


test('Class static async method test', () => {
    let code = `
        class X {
            static async f(){ }
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});


test('Class private property test', () => {
    let code = `
        class aa {
            #bb;
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class property with value test', () => {
    let code = `
        class aa {
            bb = 1;
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class private property with value test', () => {
    let code = `
        class aa {
            #bb = 1;
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class static property with value test', () => {
    let code = `
        class aa {
            static bb = 1;
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('Class static private property with value test', () => {
    let code = `
        class aa {
            static bb = 1;
        }`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});
