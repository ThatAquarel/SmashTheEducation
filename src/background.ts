const smash_tags: string[] = [
    "relaciona_imagen",
    "relacionando",
    "foto_texto_escribe",
    "comprension",
    "completando_texto",
    "escucha_selecciona",
    "revuelto"
];

let functionality = Array(smash_tags.length);
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

    for (let i = 0; i < smash_tags.length; i++) {
        let key = smash_tags[i];
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

    let new_functionality = Array(smash_tags.length);
    let calls = 0;

    smash_tags.map((instance, i) => {
        chrome.storage.sync.get([instance], (result) => {
            let state = result[instance];
            if (state != true && state != false) state = true;

            new_functionality[i] = state;
            calls++;

            if (calls >= new_functionality.length) {
                callback(new_functionality);
            }
        });
    });
}