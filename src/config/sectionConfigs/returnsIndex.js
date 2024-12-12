import {createRowData} from "../../helpers";

const findIndex = createRowData(
    'find-index',
    'Array.findIndex(callbackFn, ?thisArg)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'findIndex',
        exampleArguments: [`(element) => element.startsWith('b')`]
    },
    [
        `The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.`
    ],
    [
        `returns the index of the element that evaluates to true when going through the callback function`,
        `bananas is in index 1, therefore 1 is returned`
    ]
);

const findLastIndex = createRowData(
    'find-last-index',
    'Array.findLastIndex(callbackFn, ?thisArg)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'findLastIndex',
        exampleArguments: [`(element) => element.startsWith('b')`]
    },
    [
        `The findLastIndex() method returns the index of the last element in the array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.`
    ],
    []
);

const indexOf = createRowData(
    'index-of',
    'Array.indexOf(searchElement, ?fromIndex)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'indexOf', exampleArguments: [`'bananas'`]},
    [
        `The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.`
    ],
    [
        `give it a primitive value as an argument`,
        `the difference between indexOf and findIndex is findIndex expects callback for more complicated`,
        `indexOf, just give it a value`
    ]
);

const lastIndexOf = createRowData(
    'last-index-of',
    'Array.lastIndexOf(searchElement, ?fromIndex)',
    {array: `['apples', 'bananas', 'cherries', 'bananas']`, method: 'lastIndexOf', exampleArguments: [`'bananas'`]},
    [
        `The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.`
    ],
    []
);


export const returnsIndex = {
    heading: 'Returns Index',
    tableContents: [
        findIndex,
        findLastIndex,
        indexOf,
        lastIndexOf
    ]
}