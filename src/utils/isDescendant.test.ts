import { createBritishSuccessionTree } from "../families/britain";
import { isDescendant} from "./isDescendant";


test("basic test", ()=>{
    expect(isDescendant("William", "Charles",createBritishSuccessionTree())).toBe(true)
})
test("bs test", ()=>{
    expect(isDescendant("Viki", "Charles",createBritishSuccessionTree())).toBe(false)
})