interface ActualNumberVariable {
  type: "number";
  value: number | null;
}
interface ActualBooleanVariable {
  type: "boolean";
  value: boolean | null;
}
interface ActualTextVariable {
  type: "text";
  value: string | null;
}

export type ActualVariable =
  | ActualNumberVariable
  | ActualBooleanVariable
  | ActualTextVariable;
