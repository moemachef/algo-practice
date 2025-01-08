import addOne from './index';

test('Addition to One', () => {
  expect(addOne(1)).toEqual(2);
});

test('Addition to Two', () => {
  expect(addOne(2)).toEqual(3);
});

test('Addition to Three', () => {
  expect(addOne(3)).toEqual(4);
});
