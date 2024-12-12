import {createRowData} from "../../helpers";

const concat = createRowData(
    'concat',
    'Array.concat(index)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'concat', exampleArguments: [`'fig'`, `'peach'`]},
    [
        `The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.`
    ],
    []
);

const flat = createRowData(
    'flat',
    'Array.flat(?depth)',
    {array: `['apples', ['bananas', 'cherries'], ['fig', 'peach']]`, method: 'flat', exampleArguments: [`1`]},
    [
        `The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.`
    ],
    [
        `arrays in arrays are flattened`,
        `elements in the sub arrays are brought up to the main array`
    ]
);

const slice = createRowData(
    'slice',
    'Array.slice(begin, ?end)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'slice', exampleArguments: [`1`, `2`]},
    [
        `The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.`
    ],
    [
        `does not mutate the array`,
        `returns a new array filled with elements that are within the specified range`,
        `begin range is 1 so start at 'bananas'`,
        `end range is 2 and it is an exclusive end so stop at 2`,
        `so only include elements at 1 and that's it`,
        `this returns`,
        `['bananas']`
    ]
);

const withMethod = createRowData(
    'with',
    'Array.with(index, value)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'with', exampleArguments: [`1`, `'fig'`]},
    [
        `The with() method returns a new array with the element at the specified index replaced with the given value.`
    ],
    [
        `does not mutate original array`,
        `returns new array`,
        `['apples', 'fig', 'cherries']`,
        `'fig' placed at index 1 in the new array`
    ]
);

export const newModifiedArray = {
    heading: 'New Modified Array',
    tableContents: [
        concat,
        flat,
        slice,
        withMethod
    ]
}