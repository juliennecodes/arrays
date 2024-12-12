import {createRowData} from "../../helpers";

const pop = createRowData(
    'pop',
    'Array.pop()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'pop'},
    [
        `The pop() method removes the last element from an array and returns that element. This method changes the length of the array.`
    ],
    [
        `mutates array so that the last element is removed`,
        `returns the removed element`
    ]
);

const shift = createRowData(
    'shift',
    'Array.shift()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'shift'},
    [
        `The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.`
    ],
    [
        `mutates the array so the first element is removed`,
        `array is now`,
        `['bananas', 'cherries']`,
        ` `,
        `returns the removed first element`,
        `'apples'`
    ]
);

export const removingElementsFromArray = {
    heading: 'Removing Elements From Array',
    tableContents: [
        pop,
        shift
    ]
}