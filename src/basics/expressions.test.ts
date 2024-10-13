import { describe, expect, test } from "vitest";
import {
  addXtoY,
  divideXbyY,
  expressionXAndY,
  expressionXEqualsToYAvoidTypeComparison,
  expressionXEqualsToYWithTypeComparison,
  expressionXGreaterThanY,
  expressionXGreaterThanOrEqualsToY,
  expressionXLessThanY,
  expressionXLessThanYOrEqualsTo,
  expressionNotX,
  expressionXNotEqualsToYAvoidTypeComparison,
  expressionXNotEqualsToYWithTypeComparison,
  expressionXOrY,
  modXbyY,
  multiplicateXandY,
  substractXfromY, 
  exponentialXtoY
} from "./expressions";

describe("Testing Expressions", () => {
  describe("Testing arithmetic expressions", () => {
    test("2 + 2 should be equal to 4", () => {
      expect(addXtoY(2,2)).toBe(4);
    });
    test("2 - 2 should be equal to 0", () => {
      expect(substractXfromY(2,2)).toBe(0);
    });
    test("2 * 2 should be equal to 4", () => {
      expect(multiplicateXandY(2,2)).toBe(4);
    });
    test("2 / 2 should be equal to 1", () => {
      expect(divideXbyY(2,2)).toBe(1);
    });
    test("2 % 2 should be equal to 0", () => {
      expect(modXbyY(2,2)).toBe(0);
    });
    test("2 ^ 3 should be equal to 8", () => {
      expect(exponentialXtoY(2,3)).toBe(8);
    });
  });
  describe("Testing logical expressions", () => {
    test("true && true should be equal to true", () => {
      expect(expressionXAndY(true, true)).toBe(true);
    });
    test("true || false should be equal to true", () => {
      expect(expressionXOrY(true, false)).toBe(true);
      expect(expressionXOrY(false, true)).toBe(true);
    });
    test("!true should be equal to false", () => {
      expect(expressionNotX(true)).toBe(false);
    });
  });
  describe("Testing relational expressions", () => {
    test("2 > 1 should be equal to true", () => {
      expect(expressionXGreaterThanY(2,1)).toBe(true);
    });
    test("2 >= 2 should be equal to true", () => {
      expect(expressionXGreaterThanOrEqualsToY(2,2)).toBe(true);
    });
    test("2 < 1 should be equal to false", () => {
      expect(expressionXLessThanY(2,1)).toBe(false);
    });
    test("2 <= 2 should be equal to true", () => {
      expect(expressionXLessThanYOrEqualsTo(2,2)).toBe(true);
    });
    test("2 == 2 should be equal to true", () => {
      expect(expressionXEqualsToYAvoidTypeComparison(2, "2")).toBe(true);
    });
    test("2 === 2 should be equal to true", () => {
      expect(expressionXEqualsToYWithTypeComparison(2, 2)).toBe(true);
    });
    test("2 != 2 should be equal to false", () => {
      expect(expressionXNotEqualsToYAvoidTypeComparison(2, "2")).toBe(false);
    });
    test("2 !== 2 should be equal to false", () => {
      expect(expressionXNotEqualsToYWithTypeComparison(2, 2)).toBe(false);
    });
  });
});