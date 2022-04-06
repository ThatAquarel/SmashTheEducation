type StorageT<T> = { [id: string]: T }

export abstract class AbstractStorage<T> {
    protected cache: StorageT<T> = {};

    abstract get storage_id(): string;
    abstract get default_state(): StorageT<T>;

    setState(new_states: StorageT<T>): void {
        let msg: { [id: string]: Object } = {};
        msg[this.storage_id] = new_states;

        chrome.storage.sync.set(msg, () => {
            for (let key in new_states) {
                this.cache[key] = new_states[key];
            }
        });
    }

    getState(callback: (states: StorageT<T>) => void): void {
        if (Object.keys(this.cache).length > 0) {
            callback(this.cache);
            return;
        }

        chrome.storage.sync.get([this.storage_id], (result) => {
            let new_states = result[this.storage_id];

            if (new_states == null || Object.keys(new_states).length <= 0) {
                new_states = { ...this.default_state };
            }
            this.setState(new_states);

            for (let key in new_states) {
                this.cache[key] = new_states[key];
            }
            
            callback(this.cache);
        });
    };
}
