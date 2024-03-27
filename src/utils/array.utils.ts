export const sortNumbers = (array: number[]) =>{
    const arr = [...array];
    arr.sort((a, b) => a - b)
    return arr;
}

export const getFirstLast = <T>(array: T[]): [T, T] => [array[0], array[array.length - 1]];