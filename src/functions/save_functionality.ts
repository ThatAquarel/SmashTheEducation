import { Solution } from "../solutions/solution";

const solutions = Solution.get_instances();

export function saveFunctionality(functionality: Boolean[]) {
    for (let i = 0; i < solutions.length; i++) {
        let key = solutions[i].class_name;
        let value = functionality[i];

        let dict: { [index: string]: Boolean } = {};
        dict[key] = value;

        chrome.storage.sync.set(dict, () => {
            console.log(dict);
        });
    }

    // chrome.runtime.sendMessage({ saveFunctionality: functionality }, (response) => {
    //     if (response) return;
    // });
}

// export function loadFunctionality(callback: (states: Boolean[]) => void) {
export function loadFunctionality(class_name: string, callback: (states: Boolean[]) => void) {
    chrome.storage.sync.get([class_name], (result) => {
        let state = result[class_name];
        if (state != true && state != false) state = true;

        callback(state);
    });

    // chrome.runtime.sendMessage({ loadFunctionality: true }, (response) => {
    //     callback(response);
    // });
}
