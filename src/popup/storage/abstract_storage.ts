export type StorageT<T> = { [id: string]: T }

export class AbstractStorage<T> {
    protected cache: StorageT<T> = {};

    getStorageId(): string {
        throw new Error("Not implemented");
    }

    getDefaultState(): StorageT<T> {
        throw new Error("Not implemented");
    }

    setState(new_states: StorageT<T>): void {
        let msg: StorageT<Object> = {};
        msg[this.getStorageId()] = new_states;

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

        chrome.storage.sync.get([this.getStorageId()], (result) => {
            let new_states = result[this.getStorageId()];

            if (new_states == null || Object.keys(new_states).length <= 0) {
                new_states = { ...this.getDefaultState() };
            }
            this.setState(new_states);

            for (let key in new_states) {
                this.cache[key] = new_states[key];
            }

            callback(this.cache);
        });
    };
}
