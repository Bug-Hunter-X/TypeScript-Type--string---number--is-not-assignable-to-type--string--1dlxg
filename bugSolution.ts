function printString(str: string): void {
  console.log(str);
}

function isString(value: string | number): value is string {
  return typeof value === 'string';
}

function usePrintString(value: string | number): void {
  if (isString(value)) {
    printString(value); 
  } else {
    console.log(`Value is a number: ${value}`);
  }
}

usePrintString("hello");
usePrintString(123); 