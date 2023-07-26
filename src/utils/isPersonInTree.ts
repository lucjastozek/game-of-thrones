import { logAllPeopleInTree } from "../treeLogging";
import { Person } from "../personTypes";

export function isPersonInTree(
  nameToCheck: string,
  topPerson: Person,
): boolean {
  return logAllPeopleInTree(topPerson)
    .map((p) => p.toUpperCase())
    .includes(nameToCheck.toUpperCase());
}
