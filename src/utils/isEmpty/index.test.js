import { isEmpty } from './index';

describe("isEmpty function", () => {
  test("it should return a boolean", () => {
    expect(isEmpty([])).toBe(false);
  });
});