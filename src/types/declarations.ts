import { isNumber } from "@/data/lib/utils";
import { Radius, Padding } from "@/types/ui";

export function setRadius(value: number): Radius {
  const max = 35;
  value = (value !== undefined) ? value : 0;

  if (value > max) throw new Error(`Type "Radius" cannot be greater than ${max}.`);
  else if (value < 0) throw new Error('Type "Radius" cannot be less than 0.');
  
  return value as Radius;
}

export function setPadding(value: string): Padding {
  value = (value !== undefined && value !== "") ? value : "0 0";
  const valueArray = value.split(" ");
  
  if (valueArray.length !== 2) throw new Error('Type "Padding" should take two values. For example, "10 20".')
  valueArray.forEach((element: string) => {
    if (!isNumber(element)) throw new Error('Type "Padding" must include numbers in the string')
  });

  return value as Padding;
}