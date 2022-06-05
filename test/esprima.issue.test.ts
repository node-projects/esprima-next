import { expect, test } from '@jest/globals'
import { parseModule, parseScript } from '../src/esprima';

test('esprima -#2034 - test', () => {
    let code = `const obj1 = { key: "value"};
    const obj2 = { ...obj1, key2: "value"};`;
    let ast = parseModule(code);
});


test('esprima -#2113 - test', () => {
    let code = `
    var ops={
        a:1,
        b:2
    }

    function fn(ops){
        console.log(ops)
    }

    fn({...ops})`;
    let ast = parseModule(code);
});

test('esprima -#2112 - test', () => {
    let code = `foo?.bar`;
    let ast = parseModule(code);
});
