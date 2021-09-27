import { class_names } from "./solutions/class_names";

let functionality = Array(class_names.length);
loadAllFunctionality((states: Boolean[]) => {
    functionality = [...states];
});

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.saveFunctionality) {
        saveFunctionality(message.saveFunctionality);
        sendResponse(true);
    } else if (message.loadAllFunctionality) {
        loadAllFunctionality((states) => {
            sendResponse(states);
        });
    }

    return true;
});

function saveFunctionality(states: Boolean[]) {
    functionality = [...states];

    for (let i = 0; i < class_names.length; i++) {
        let key = class_names[i];
        let value = states[i];

        let dict: { [index: string]: Boolean } = {};
        dict[key] = value;

        chrome.storage.sync.set(dict, () => {
            console.log(dict);
        });
    }
}

function loadAllFunctionality(callback: (states: Boolean[]) => void) {
    if (!functionality.includes(undefined)) callback(functionality);

    let new_functionality = Array(class_names.length);
    let calls = 0;

    class_names.map((class_name, i) => {
        chrome.storage.sync.get([class_name], (result) => {
            let state = result[class_name];
            if (state != true && state != false) state = true;

            new_functionality[i] = state;
            calls++;

            if (calls >= new_functionality.length) {
                callback(new_functionality);
            }
        });
    });
}