import { expect, test } from '@jest/globals'
import { parse, parseModule } from '../src/esprima';

test('export wrong formated string', () => {
    let code = `export {Moon as "\uD83C",} from "./early-export-ill-formed-string.js";
    export {"\uD83C"} from "./early-export-ill-formed-string.js";
    import {'\uD83C' as Usagi} from "./early-export-ill-formed-string.js";

    function Moon() {}`;

    expect(() => parseModule(code)).toThrow();
});
