import { pad } from "../helpers/helpers";

describe("helpers", () => {
  it("should pad numbers below 10 with leading zeros", () => {
    const expected = "05";
    const padded = pad(5);
    expect(padded).toBe(expected);
  });

  it("should NOT pad numbers above 10 with leading zeros", () => {
    const expected = 10;
    const padded = pad(10);
    expect(padded).toBe(expected);
  });
});
