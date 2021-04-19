import { getBirthdateAndAge } from './index';

const date = "1990-02-16T12:22:33.245+01:00";
const expected = "02-16-1990 (31)";
describe("getBirthdateAndAge function", () => {
  test("it should return a string", () => {
    expect(getBirthdateAndAge(date)).toMatch(expected);
  });
});
