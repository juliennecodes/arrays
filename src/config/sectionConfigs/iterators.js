import {createRowData} from "../../helpers";

const entries = createRowData(
    'entries',
    'Array.entries()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'entries'},
    [
        `The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.`
    ],
    [
        `returns an iterator`,
        `each iteration returns [key, value]`,
        `so here, this returns`,
        `[0, 'apples']`,
        `[1, 'bananas']`,
        `[2, 'cherries']`,
    ]
);

const keys = createRowData(
    'keys',
    'Array.keys()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'keys'},
    [
        `The keys() method returns a new Array Iterator object that contains the keys for each index in the array.`
    ],
    [
        `returns an iterator, where each iteration returns the keys of the array, which are indices`,
        `if you loop over the iterator and console log, this will return 0, 1, 2`
    ]
);

const values = createRowData(
    'values',
    'Array.values()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'values'},
    [
        `The values() method returns a new Array Iterator object that contains the values for each index in the array.`
    ],
    [
        `returns an iterator`,
        `each iteration returns the elements in the array`,
        `first iteration - 'apples'`,
        `next iteration - 'bananas'`,
        `next iteration - 'cherries'`,
    ]
);

export const iterators = {
    heading: 'Iterators',
    tableContents: [
        entries,
        keys,
        values
    ]
}