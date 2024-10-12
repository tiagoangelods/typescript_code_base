import { describe, expect, test } from "vitest";
import {
  arrayValue,
  booleanValue,
  functionValue,
  numberValue,
  objectValue,
  stringValue
} from "./basic-types";
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
  describe("Testing array, object and functions", () => {
    test("const arrayValues should be an object type, remember array has object type in javascript/typescript", () => {
      expect(arrayValue).toBeTypeOf("object");
      expect(Array.isArray(arrayValue)).toBe(true);
    });
    test("const arrayValue should be a length equals to 1", () => {
      expect(arrayValue).toHaveLength(1);
    });
    test("const objectValue should be an object type", () => {
      expect(objectValue).toBeTypeOf("object");
    });
    test("const objectValue to not have any property", () => {
      expect(objectValue).toMatchObject({});
    });
    test("const functionValue should be an function type", () => {
      expect(functionValue).toBeTypeOf("function");
    });
    
  });
});