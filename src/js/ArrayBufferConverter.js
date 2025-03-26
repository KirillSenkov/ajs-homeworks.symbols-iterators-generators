export default class ArrayBufferConverter {
    constructor() {
      this.buffer = null;
    }
  
    load(buffer) {
      if (!(buffer instanceof ArrayBuffer)) {
        throw new Error('Переданный аргумент должен быть ArrayBuffer.');
      }
      this.buffer = buffer;
    }
  
    toString() {
      if (!this.buffer) {
        throw new Error('Буфер не загружен');
      }
      const view = new Uint16Array(this.buffer);
      return Array.from(view)
        .map(code => String.fromCharCode(code))
        .join('');
    }
  }
  