const Math = require("./math");

describe("Math", () => {
  let math;

  beforeEach(() => {
    math = new Math();
  });

  describe("sum", () => {
    it("adds 2 positive numbers", () => {
      expect(math.sum(2, 2)).toBe(4);
    });

    it("adds 1 positive number and 1 negative number", () => {
      expect().toBe(); // add assertion here
    });

    it("adds 2 negative numbers", () => {
      expect(math.sum(-2, -4)).toBe(-6);
    });
  });

  describe("difference", () => {
    it("subtracts 2 positive numbers", () => {
      expect().toBe(); // add assertion here
    });

    it("subtracts 2 negative numbers", () => {
      expect(math.difference(-2, -4)).toBe(2);
    });
  });

  describe("product", () => {
    it("returns zero when either operand is zero", () => {
      expect(math.product(2, 0)).toBe(0);
      expect().toBe(); // add assertion here
    });

    it("multiplies 2 positive numbers", () => {
      expect().toBe(); // add assertion here
    });
  });

  describe("quotient", () => {
    it("divides 2 positive numbers", () => {
      expect(math.quotient(10, 2)).toBe(5);
    });
    it("throws an dived by zero exception", () => {
      expect().toBe(); // add assertion here
    });
  });
});
