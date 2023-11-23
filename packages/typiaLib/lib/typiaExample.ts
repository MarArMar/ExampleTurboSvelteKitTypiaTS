import typia, { tags } from "typia";

interface IMember {
  id: string;
  email: string & tags.Format<"email">;
  age: number &
    tags.Type<"uint32"> &
    tags.ExclusiveMinimum<19> &
    tags.Maximum<100>;
}

export const exampleMember = {
  id: "qsdqsdqsd",
  email: "samchon.github@gmai19l.com",
  age: 30,
};
export const exampleNotMember = {
  id: ">3",
  email: "samchon.github@",
  age: "bbb",
};

export const matchedLib: boolean = typia.is<IMember>(exampleMember);
export const notMatchedLib: boolean = typia.is<IMember>(exampleNotMember);

export function validateMember(member: IMember) {
  const res: typia.IValidation<IMember> = typia.validate<IMember>(member);

  console.log("validateMember res", res);

  if (!res.success) {
    throw new Error(`Invalid member, ${JSON.stringify(res.errors)}`);
  }
}
export const loadedTypiaLib = `typiaLib/lib/typiaExample.ts loaded and matched is ${matchedLib} (expected: true) & notMatched is ${notMatchedLib} (expected: false)`;
