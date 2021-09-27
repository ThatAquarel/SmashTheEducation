import { class_names } from "../solutions/class_names";

export function saveFunctionality(functionality: Boolean[]) {
    chrome.runtime.sendMessage({ saveFunctionality: functionality }, (response) => {
        if (response) return;
    });
}

export function loadAllFunctionality(callback: (states: Boolean[]) => void) {
    chrome.runtime.sendMessage({ loadAllFunctionality: true }, (response) => {
        callback(response);
    });
}

export function loadFunctionality(class_name: string, callback: (state: Boolean) => void) {
    loadAllFunctionality((states: Boolean[]) => {
        let i = class_names.indexOf(class_name);
        if (i === -1) {
            callback(true)
        } else {
            callback(states[i])
        }
    });
}
