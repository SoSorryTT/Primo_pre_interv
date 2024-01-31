export function mergeArrays(collection1: number[], collection2: number[]): number[] {
    let result: number[] = [];
    let i = 0;
    let j = 0;

    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
        result.push(collection1[i]);
        i++;
        } else {
        result.push(collection2[j]);
        j++;
        }
    }

    // for collection that do not have the same length
    while (i < collection1.length) {
        result.push(collection1[i]);
        i++;
    }
    while (j < collection2.length) {
        result.push(collection2[j]);
        j++;
    }

    return result;
}
  