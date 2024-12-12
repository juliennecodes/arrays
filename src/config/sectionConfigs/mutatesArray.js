import {createRowData} from "../../helpers";

const copyWithin = createRowData(
    'copy-within',
    'Array.copyWithin(target, start, ?end)',
    {
        array: `['apples', 'bananas', 'cherries', 'fig', 'peach']`,
        method: 'copyWithin',
        exampleArguments: [`0`, `1`, `3`]
    },
    [
        `The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.`
    ],
    [
        `mutates original array`,
        `what the arguments 0, 1, 3 means is`,
        `copy to index 0`,
        `elements in the exclusive range 1 - 3`,
        `bananas (index 1) and cherries (index 2) will replace elements in the array starting at index 0`,
        `this returns`,
        `['bananas', 'cherries', 'cherries', 'fig', 'peach']`,
        `where the original array was`,
        `['apples', 'bananas', 'cherries', 'fig', 'peach']`,
    ]
);

const fill = createRowData(
    'fill',
    'Array.fill(value, ?start, ?end)',
    {array: `['apples', 'bananas', 'cherries', 'dragonfruit']`, method: 'fill', exampleArguments: [`'fig'`, `1`, `3`]},
    [
        `The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.`
    ],
    [
        `give the method the value to fill the array with`,
        `specify the range to fill`,
        `if you give it 1 as start, it will start filling fig starting at index 1`,
        `if you give it 3 as end (exclusive end), it will fill up to index 2`,
        `so fig will replace elements in index 1 and 2`,
        `[ "apples", "fig", "fig", "dragonfruit" ]`
    ]
);

const reverse = createRowData(
    'reverse',
    'Array.reverse()',
    {array: `['apples', 'bananas', 'cherries']`, method: 'reverse'},
    [
        `The reverse() method of Array instances reverses an array in place and returns the reference to the same array, the first array element now becoming the last, and the last array element becoming the first. In other words, elements order in the array will be turned towards the direction opposite to that previously stated.`
    ],
    []
);

const sort = createRowData(
    'sort',
    'Array.sort(?compareFn)',
    {array: `['cherries', 'apples', 'bananas']`, method: 'sort', exampleArguments: [`(a, b) => a.localeCompare(b)`]},
    [
        `The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.`
    ],
    []
);

const splice = createRowData(
    'splice',
    'Array.splice(start, deleteCount, ...items)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'splice', exampleArguments: [`1`, `1`, `'fig'`, `'peach'`]},
    [
        `The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.`
    ],
    [
        `inserts items in an array`,
        `you have to specify where you're inserting`,
        `the item that originally occupied the index position is removed and returned`,
        `this is returned`,
        `['bananas']`,
        ` `,
        `mutates the array`,
        `the original array is now`,
        `['apples', 'fig', 'peach', 'cherries']`
    ]
);

export const mutatesArray = {
    heading: 'Mutates Array',
    tableContents: [
        reverse,
        sort,
        copyWithin,
        fill,
        splice
    ]
}