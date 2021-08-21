import demo from '../app';

test('parameter output testing', () => {
  const unusedVariable = 'variable';

  expect(demo(unusedVariable)).toBe('variable');
});
