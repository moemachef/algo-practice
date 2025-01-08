const addOne = require('./index');

test('Addition of One', () => {
  expect(addOne(1)).toEqual(2);
});

test('Addition of One', () => {
  expect(addOne(2)).toEqual(3);
});
