import assert from "node:assert/strict";
import { describe, it } from "mocha";

import { expect } from "chai";

import { anyUint } from "@ignored/hardhat-vnext-chai-matchers/withArgs";
import { PANIC_CODES } from "@ignored/hardhat-vnext-chai-matchers/panic";

describe("Mocha test", () => {
  it("should work", () => {
    assert.equal(1 + 1, 2);
  });
});

describe("Mocha test with chai-matchers", () => {
  it("should import variables from the chai-matchers package", () => {
    expect(anyUint).to.be.a("function");
    expect(PANIC_CODES.ASSERTION_ERROR).to.be.a("number");
  });

  it("should have the hardhat additional matchers", () => {
    expect("0x0000010AB").to.not.hexEqual("0x0010abc");
  });
});
