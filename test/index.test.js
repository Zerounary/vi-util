var expect = require("chai").expect;
var lib = require("../src/index");

describe("Hello test", function () {
  it("shoud be same string", function () {
    let result = lib.hi();
    expect("Hi libs!").to.eq(result);
  });
  describe("subBetween", function () {
    it("empty str return enpmty string", function () {
      let result = lib.subBetween();
      expect("").to.eq(result);
    });
    it("str not empty, the others is empty, return str", function () {
      let result = lib.subBetween("The test string");
      expect("The test string").to.eq(result);
    });
    it("str and before not empty, return str without before  ", function () {
      let result = lib.subBetween("The test string", "The");
      expect(" test string").to.eq(result);
    });
    it("str and end not empty, return str without end  ", function () {
      let result = lib.subBetween("The test string", "", "ing");
      expect("The test str").to.eq(result);
    });
    it("all not empty, return str between before and end  ", function () {
      let result = lib.subBetween("The test string", "The", "ing");
      expect(" test str").to.eq(result);
    });
    it("str before after is same string, return empty str", function () {
      let result = lib.subBetween("1", "1", "1");
      expect("").to.eq(result);
    });
    it("before not exist, after exist return empty str", function () {
      let result = lib.subBetween("121", "3", "1");
      expect("").to.eq(result);
    });
  });
});
