export namespace StorageBackend {
    let states: { [id: string]: number } = {};

    export function setState(new_states: { [id: string]: number }) {
        chrome.storage.sync.set(new_states, () => {
            for (let key in new_states) {
                states[key] = new_states[key];
            }
        });
    }

    export function getState(callback: (_: { [id: string]: number }) => void) {
        if (Object.keys(states).length !== 0) {
            callback(states);
            return;
        }

        chrome.storage.sync.get(Object.keys(states), (result) => {
            for (let key in states) {
                states[key] = result[key];
            }
            callback(states);
        });
    }
}

StorageBackend.getState((state) => { console.log(state); });

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.set === true) {
        if (message.state === null) { sendResponse({ state: null }) };
        StorageBackend.setState(message.state);

    } else if (message.set === false) {
        StorageBackend.getState((state) => {
            sendResponse({ state: state });
        });
    }

    return true;
});
