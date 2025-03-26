import ArrayBufferConverter from '../ArrayBufferConverter.js';
import { getBuffer } from '../getBuffer.js';

describe('ArrayBufferConverter', () => {
  test('load() загружает ArrayBuffer без ошибок', () => {
    const converter = new ArrayBufferConverter();
    const buffer = getBuffer();
    converter.load(buffer);
    expect(converter.buffer).toBe(buffer);
  });

  test('toString() корректно конвертирует содержимое буфера в строку', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    const str = converter.toString();
    expect(str).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  });

  test('load() выбрасывает ошибку при некорректном аргументе', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.load('not a buffer')).toThrow('Переданный аргумент должен быть ArrayBuffer');
  });

  test('toString() выбрасывает ошибку, если буфер не загружен', () => {
    const converter = new ArrayBufferConverter();
    expect(() => converter.toString()).toThrow('Буфер не загружен');
  });
});
