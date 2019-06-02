import { range } from '../index';

describe('range()', () => {
  it('loops over specified range correctly', () => {
    const generator = range(1, 3);
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().done).toBe(true);
  });
});
