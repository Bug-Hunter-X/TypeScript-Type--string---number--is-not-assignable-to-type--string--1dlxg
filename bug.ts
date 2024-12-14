function printString(str: string): void {
  console.log(str);
}

function usePrintString(value: string | number): void {
  printString(value); // Error: Argument of type 'string | number' is not assignable to parameter of type 'string'.
}

usePrintString("hello");
usePrintString(123); // This line will cause a compile-time error.