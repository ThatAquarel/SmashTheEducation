let states: { [id: string]: boolean } = {};

export namespace StorageBackend {
    const app_state_key = "app_state";

    export function setState(new_states: { [id: string]: boolean }) {
        chrome.storage.sync.set({app_state_key: new_states}, () => {
            for (let key in new_states) {
                states[key] = new_states[key];
            }
        });
    }

    export function getState(callback: (_: { [id: string]: boolean }) => void) {
        if (Object.keys(states).length !== 0) {
            console.log("getstate from cache");
            // console.log(states);
            callback(states);
            return;
        }
        console.log("getstate from storage");
        chrome.storage.sync.get([app_state_key], (result) => {
            let new_states = result[app_state_key];
            for (let key in new_states) {
                states[key] = new_states[key];
            }
            callback(states);
        });
    }
}

StorageBackend.getState((loaded_states) => {
    console.log("initial load state")
    states = { ...loaded_states };
});

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
