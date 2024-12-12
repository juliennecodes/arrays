import {createRowData} from "../../helpers";

const every = createRowData(
    'every',
    'Array.every(callbackFn, ?thisArg)',
    {
        array: `['apples', 'bananas', 'cherries']`,
        method: 'every',
        exampleArguments: [`(element) => element.length > 5`]
    },
    [],
    [
        `returns true or false`,
        `if each element in the array meets the condition in the callback function, every returns true`,
        `if even just one does not meet the condition, every returns falls`
    ]
);

const includes = createRowData(
    'includes',
    'Array.includes(valueToFind, ?fromIndex)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'includes', exampleArguments: [`'bananas'`]},
    [
        `The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.`
    ],
    []
);

const some = createRowData(
    'some',
    'Array.some(callbackFn, ?thisArg)',
    {array: `['apples', 'bananas', 'cherries']`, method: 'some', exampleArguments: [`(element) => element.length > 6`]},
    [
        `The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.`
    ],
    [
        `each element goes through the callback function`,
        `if even just one results in the callback function returning true`,
        `-some- method will return true`
    ]
);


export const returnsBoolean = {
    heading: 'Returns Boolean',
    tableContents: [
        some,
        every,
        includes
    ]
}