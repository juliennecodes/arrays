import {createRowData} from "../../helpers";

const push = createRowData(
    'push',
    'Array.push(element1, ...elementsN)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'push', exampleArguments: [`'fig'`, `'peach'`]},
    [
        `The push() method adds one or more elements to the end of an array and returns the new length of the array.`
    ],
    [
        `mutates the array so that element is added to it`,
        `returns the new length of the mutated array`
    ]
);

const unshift = createRowData(
    'unshift',
    'Array.unshift(element1, ...elementsN)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'unshift', exampleArguments: [`'fig'`, `'peach'`]},
    [
        `The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.`
    ],
    [
        `mutates the array`,
        `original array is now`,
        `['fig', 'peach', 'apples', 'bananas', 'cherries']`,
        `unshift returns the new length of the array, which is 5`
    ]
);

export const insertingElementsToArray = {
    heading: 'Inserting Elements to Array',
    tableContents: [
        push,
        unshift,
    ]
}