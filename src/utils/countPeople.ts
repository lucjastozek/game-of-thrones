import { logAllPeopleInTree } from "../treeLogging";
import { Person } from "../personTypes";


export function countPeople(topPerson:Person):number {
    console.log(logAllPeopleInTree(topPerson).length);
    return logAllPeopleInTree(topPerson).length
}

