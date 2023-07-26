import { createBritishSuccessionTree } from "../families/britain";
import { countPeople } from "./countPeople";

test("basic test",()=> {
    expect(countPeople(createBritishSuccessionTree())).toBe(23);
})