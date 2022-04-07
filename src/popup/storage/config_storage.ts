import { AbstractStorage, StorageT } from "./abstract_storage";

export class ConfigStorage extends AbstractStorage<string> {
    getStorageId(): string {
        return "config";
    }

    getDefaultState(): StorageT<string> {
        return {
            config: 'off'
        };
    }
}
