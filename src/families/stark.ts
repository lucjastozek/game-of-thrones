import { Person } from "../personTypes";

export function createStarkTree(): Person {
  const rickon: Person = { name: "Rickon", children: [] };
  const bran: Person = { name: "Bran", children: [] };
  const arya: Person = { name: "Arya", children: [] };
  const sansa: Person = { name: "Sansa", children: [] };
  const robb: Person = { name: "Robb", children: [] };
  const jon: Person = { name: "Jon", children: [] };
  const eddardChildren: Person[] = [rickon, bran, arya, sansa, robb, jon];
  const eddard: Person = { name: "Eddard", children: eddardChildren };
  const benjen: Person = { name: "Benjen", children: [] };
  const lyanna: Person = { name: "Lyanna", children: [] };
  const brandon: Person = { name: "Brandon", children: [] };
  const rickardChildren: Person[] = [eddard, benjen, lyanna, brandon];
  const rickard: Person = { name: "Rickard", children: rickardChildren };

  return rickard;
}
