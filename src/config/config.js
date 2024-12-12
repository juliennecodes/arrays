import {returnsBoolean} from "./sectionConfigs/returnsBoolean";
import {returnsIndex} from "./sectionConfigs/returnsIndex";
import {returnsElement} from "./sectionConfigs/returnsElement";
import {mainMethods} from "./sectionConfigs/mainMethods";
import {iterators} from "./sectionConfigs/iterators";
import {mutatesArray} from "./sectionConfigs/mutatesArray";
import {newModifiedArray} from "./sectionConfigs/newModifiedArray";
import {insertingElementsToArray} from "./sectionConfigs/insertingElementsToArray";
import {removingElementsFromArray} from "./sectionConfigs/removingElementsFromArray";
import {returnsString} from "./sectionConfigs/returnsString";


export const config = {
    title: 'Array Methods',
    categories: [
        mainMethods,
        iterators,
        insertingElementsToArray,
        removingElementsFromArray,
        mutatesArray,
        newModifiedArray,
        returnsIndex,
        returnsElement,
        returnsBoolean,
        returnsString
    ]
}