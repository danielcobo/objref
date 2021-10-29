const objRef = require('./index.js');
const a = {
  b: {
    c: {
      d: 1,
      e: 2,
    },
  },
};

test('objRef() - basic use', function () {
  const d = objRef(a, 'b/c/d');
  expect(d).toStrictEqual(1);
});

test('objRef() - custom separator', function () {
  const e = objRef(a, 'b-c-e', '-');
  expect(e).toStrictEqual(2);
});

test('objRef() - buildPath', function () {
  const f = objRef(a, 'b/c/f', '/', true);
  const abc = objRef(a, 'b/c');
  abc.f = 100;
  expect(a.b.c.f).toStrictEqual(100);
});

test('objRef() - refernce', function () {
  let c = objRef(a, 'b/c');
  c = 100;
  expect(a.b.c).not.toStrictEqual(100);
  let ab = objRef(a, 'b/c');
  ab.c = 100;
  expect(ab.c).toStrictEqual(100);
});

test('objRef() - invalid path', function () {
  expect(() => objRef(a, 'b/wrongpath')).toThrow('Invalid path');
});
