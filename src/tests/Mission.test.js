import fetchMission from './__mock__/MissionSlice';

describe('Mission must pass the test', () => {
  test('Fetch mission must return data', () => {
    expect(fetchMission()).toBeDefined();
  });
  test('Fetch mission return value length must be', () => {
    expect(fetchMission()).toHaveLength(4);
  });
  test('Fetch mission return name to be', () => {
    expect(fetchMission()[1].name).toBe('Dodge KillerX');
  });
});
