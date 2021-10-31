export type TwoArgsOperation = (a: number, b: number) => number ;

export type SingleArgOperation = (a: number) => number ;

export const sum = (a: number, b: number) : number => {
    return a + b;
};

export const substract = (a: number, b: number) : number => {
    return a - b;
};

export const multiply = (a: number, b: number) : number => {
    return a * b;
};

export const divide = (a: number, b: number) : number => {
    return a / b;
};

export const sqrt = (n: number) : number => {
    return Math.sqrt(n);
};

export const roundToOneDecimal = (n: number) : number => {
    return Math.round(n * 10) /10;
};