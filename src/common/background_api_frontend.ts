export namespace StorageFrontend {
    export function setState(states: { [id: string]: number }) {
        chrome.runtime.sendMessage({ set: true, state: states }, (response) => {
            if (response) return;
        });
    }

    export function getState(callback: (states: { [id: string]: number }) => void) {
        chrome.runtime.sendMessage({ set: false, state: null }, (response) => {
            callback(response.state);
        });
    }
}
