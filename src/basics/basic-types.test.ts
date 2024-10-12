import { describe, expect, test } from "vitest";
import { booleanValue, numberValue, stringValue } from "./basic-types";
describe('Testing Basic Types', () => {
  describe('Testing primitive types', () => {
    test("const stringValue should be a String type", () => {
      expect(stringValue).toBeTypeOf("string");
    });
    test("const string value should be equal to 'I am a string'", () => {
      expect(stringValue).toBe("I am a string");
    });
    test("const numberValue should be a Number type", () => {
      expect(numberValue).toBeTypeOf("number");
    });
    test("const numberValue should be equal to 8", () => {
      expect(numberValue).toBe(8);
    });
    test("const booleanValue should be a Boolean type", () => {
      expect(booleanValue).toBeTypeOf("boolean");
    });
    test("const booleanValue should be equal to true", () => {
      expect(booleanValue).toBe(true);
    });
  });
});