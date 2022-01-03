import { expect, test } from '@jest/globals'
import { parse } from '../src/esprima'

test('bigint simple test', () => {
    let code = `let i = 12n;`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});

test('bigint variants', () => {
    let valids = [
        '0n',
        '1_2n'];

    let invalids = [
        '1_n',
        '1.1n',
        '00n',
        '01n',
        '07n'];

    for (let p of valids) {
        console.info("bigint should parse", p);
        const ret = parse(p + ";");
        expect((<any>ret.body[0]).expression.value).toEqual(eval(p));
    }

    for (let p of invalids) {
        console.info("bigint should throw", p);
        expect(() => parse('let i = ' + p + ";")).toThrow();
    }
});

