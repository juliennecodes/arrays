import {createRowData} from "../../helpers";

const at = createRowData(
    'at',
    'Array.at(index)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'at'},
    [
        `The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.`
    ],
    [
        `if no argument provided, the first element is returned`,
        `1 returns the second element in the array`,
        `2 returns the third element in the array`,
        `..etc`,
        `if the argument specifies an index that the array doesn't have, undefined is returned`
    ]
);

const find = createRowData(
    'find',
    'Array.find(callbackFn)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'find',
        exampleArguments: [`(element) => element.startsWith('b')`]
    },
    [
        `The find() method of Array instances returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.`
    ],
    [
        `each element in the array goes through the callback function`,
        `the first element that evaluates to true is returned`,
        `this returns 'bananas'`,
        `if no element evaluates to true, undefined is returned`
    ]
);

const findLast = createRowData(
    'find-last',
    'Array.findLast(callbackFn, ?thisArg)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'findLast',
        exampleArguments: [`(element) => element.startsWith('b')`]
    },
    [
        `The findLast() method returns the value of the last element in the array that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned.`
    ],
    []
);

export const returnsElement = {
    heading: 'Returns Element',
    tableContents: [
        at,
        find,
        findLast
    ]
}