import {createRowData} from "../../helpers";

const join = createRowData(
    'join',
    'Array.join(separator)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'join', exampleArguments: [`', '`]},
    [
        `The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.`
    ],
    []
);

const toString = createRowData(
    'to-string',
    'Array.toString()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'toString'},
    [
        `The toString() method returns a string representing the specified array and its elements.`
    ],
    [
        `returns 'apples,bananas,cherries'`
    ]
);

export const returnsString = {
    heading: 'Returns String',
    tableContents: [
        join,
        toString
    ]
}