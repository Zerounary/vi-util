var expect = require("chai").expect;
var lib = require("../src/index");

describe("Hello test", function () {
  it("shoud be same string", function () {
    expect(lib.hi()).to.eq("Hi libs!");
  });
});
