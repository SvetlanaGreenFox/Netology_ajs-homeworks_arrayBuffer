import ArrayBufferConverter, { getBuffer } from '../js/arraybufferconverter';

test('Return a string', () => {
  const a = getBuffer();
  const b = new ArrayBufferConverter();
  b.load(a);

  expect(b.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
