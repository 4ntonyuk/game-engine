export const isNumber = (str: string): boolean => {
  return /^\d+$/.test(str);
}


export const once = (fn: Function) => {
  let called = false;
  return (...args: any[]) => {
    if (!called) {
      called = true;
      fn(...args);
    }
  }
}
