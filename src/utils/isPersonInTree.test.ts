import { createBritishSuccessionTree } from "../families/britain";
import { isPersonInTree } from "./isPersonInTree";

test("basic tests", () => {
  expect(isPersonInTree("Charles", createBritishSuccessionTree())).toBe(true);
  expect(isPersonInTree("Lucja", createBritishSuccessionTree())).toBe(false);
  expect(isPersonInTree("Viki", createBritishSuccessionTree())).toBe(false);
});
