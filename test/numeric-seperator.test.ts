import { expect, test } from '@jest/globals'
import { parse } from '../src/esprima'

test('numeric seperator simple test', () => {
    let code = `let i = 1_2;`;

    const parsed = parse(code);

    expect(parsed).not.toBe(null);
});


test('numeric seperator variants', () => {
    let valids = [
        '1_2_3_4',
        '1_000_000',
        '10000_00',
        '1_000000_0_0_0',
        '1_2.3_4e5_6',
        '1_1.2_2',
        '1_1e2_2',
        '0x1_0',
        '0o1_0',
        '0b1_0'];

    let invalids = [
        '1__1',
        '1.2__2',
        '1e2__2',
        '1_',
        '1_.2',
        '1_e2',
        '1._2',
        '1.2_',
        '1e_2',
        '1e2_',
        '0x_1',
        '0x1__1',
        '0o_1',
        '0o1__1',
        '0b_1',
        '0b1__1'];

    for (let p of valids) {
        console.info("numeric literal should parse", p);
        const ret = parse(p + ";");
        expect((<any>ret.body[0]).expression.value).toEqual(eval(p));
    }

    for (let p of invalids) {
        console.info("numeric literal should throw", p);
        expect(() => parse('let i = ' + p + ";")).toThrow();
    }
});

