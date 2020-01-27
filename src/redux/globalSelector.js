import * as boxSelectors from './boxStore/selector';
import * as settingSelectors from './settingStore/selector';

const selectors = {};

Object.keys(boxSelectors).forEach(
    funcName => selectors[funcName] = state => boxSelectors[funcName](state.box),
);

Object.keys(settingSelectors).forEach(
    funcName => selectors[funcName] = state => settingSelectors[funcName](state.setting),
);

export default selectors;