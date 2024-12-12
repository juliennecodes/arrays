import {createRowData} from "../../helpers";

const filter = createRowData(
    'filter',
    'Array.filter(callbackFn)',
    {
        array: `['apples', 'bananas', 'cherries', 'fig']`,
        method: 'filter',
        exampleArguments: [`(element) => element.length > 5`]
    },
    [
        `The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.`
    ],
    [
        `each element in the array is passed as argument to the callback function`,
        `if it returns true, the element is included in the new array`,
        `new array returned`
    ]
);

const forEach = createRowData(
    'for-each',
    'Array.forEach(callbackFn, ?thisArg)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'forEach',
        exampleArguments: [`(element) => console.log(element)`]
    },
    [
        `The forEach() method executes a provided function once for each array element.`
    ],
    []
);

const map = createRowData(
    'map',
    'Array.map(callbackFn, ?thisArg)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'map',
        exampleArguments: [`(element) => element.toUpperCase()`]
    },
    [
        `The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.`
    ],
    [
        `returns a new array`,
        `elements of new array are composed of what is returned after the element goes through callback function`,
        `this returns`,
        `['APPLES', 'BANANAS', 'CHERRIES']`
    ]
);

const reduce = createRowData(
    'reduce',
    'Array.reduce(callbackFn, ?initialValue)',
    {array: `[1, 2, 3, 4, 5]`, method: 'reduce', exampleArguments: [`(acc, curr) => acc + curr`, `0`]},
    [
        `The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.`
    ],
    [
        `there is an initial value`,
        `initial value is an accumulator`,
        `accumulator is the first argument to the reducer`,
        `the element in the second argument`,
        `the return of the reducer becomes the accumulator for the next iteration`,
        `the array is iterated over until there are no more elements`,
        `the returned value is the result of the last reducer call`
    ]
);

export const mainMethods = {
    heading: 'Main Methods',
    tableContents: [
        reduce,
        map,
        filter,
        forEach
    ]
}