import fetchRocket from './__mock__/RocketSlice';

describe('Rockets must pass the test', () => {
  test('Fetch available rockets must return data', () => {
    expect(fetchRocket()).toBeDefined();
  });
  test('Fetch mission return value length must be', () => {
    expect(fetchRocket()).toHaveLength(3);
  });
  test('Fetch mission return name to be', () => {
    expect(fetchRocket()[2].name).toBe('AnyVerse Trip');
  });
});
