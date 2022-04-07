import { instances } from "../../inject/solutions/solutions"
import { AbstractStorage, StorageT } from "./abstract_storage";

export class SelectStorage extends AbstractStorage<boolean> {
    getStorageId(): string {
        return "state";
    }

    getDefaultState(): StorageT<boolean> {
        let new_states: StorageT<boolean> = {};
        instances.map((instance) => {
            new_states[instance.smash_tag] = true;
        });

        return new_states;
    }
}
