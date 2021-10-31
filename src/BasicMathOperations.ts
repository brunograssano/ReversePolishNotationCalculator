export type MathOperation = (a: number, b: number) => number ;

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