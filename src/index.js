import ArrayBufferConverter from './js/ArrayBufferConverter.js';
import { getBuffer } from './js/getBuffer.js';

const converter = new ArrayBufferConverter();
converter.load(getBuffer());
console.log(converter.toString());