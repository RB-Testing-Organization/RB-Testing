import { test } from "node:test";
import assert from "node:assert";

test("intentional CI failure", () => {
  assert.strictEqual(1, 1);
});
