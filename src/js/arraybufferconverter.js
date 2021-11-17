export default class ArrayBufferConverter {
  load(buffer) {
    this.data = buffer;
  }

  toString() {
    const bufferInt16 = new Int16Array(this.data);

    const str = bufferInt16.reduce((acc, elem) => {
      acc.push(String.fromCharCode(elem));
      return acc;
    }, []);

    return str.join('');
  }
}

export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}
