import { foo } from "../fooUtils";

describe("fooUtils", () => {
  it("should return a string with 'FOO THIS' in it", () => {
    let result = foo("HELLO WORLD");

    expect(result.indexOf('FOO THIS THING:')).toBe(0);
  });
});
