import { instances } from "../../inject/solutions/solutions"

let cache: { [id: string]: boolean } = {};

export namespace SelectStorage {
    export function setState(new_states: { [id: string]: boolean }) {
        chrome.storage.sync.set({ "state": new_states }, () => {
            for (let key in new_states) {
                cache[key] = new_states[key];
            }
        });
    }

    export function getState(callback: (states: { [id: string]: boolean }) => void) {
        if (Object.keys(cache).length > 0) {
            callback(cache);
            return;
        }

        chrome.storage.sync.get(["state"], (result) => {
            let new_states = result["state"];
            
            if (new_states == null || Object.keys(new_states).length <= 0) {
                new_states = {};
                instances.map((instance) => {
                    new_states[instance.smash_tag] = true;
                });
            }
            setState(new_states);

            for (let key in new_states) {
                cache[key] = new_states[key];
            }
            callback(cache);
            return;
        });
    }
}
