import { ConfigStorage } from "../../popup/storage/config_storage";
import { SelectStorage } from "../../popup/storage/select_storage";

const config_storage = new ConfigStorage();
const select_storage = new SelectStorage();

export abstract class AbstractSolution<T> {
    readonly current_document: Document;

    abstract get display_name(): string;
    abstract get description(): string;

    abstract get smash_tag(): string;

    constructor(current_document: Document) {
        this.current_document = current_document;
    }

    is_using_solution(): boolean {
        let action = document.querySelector('form[action]')?.getAttribute("action");
        if (action?.includes(this.smash_tag)) {
            return true;
        } else {
            return false;
        }
    };

    solution() {
        select_storage.getState((select_state) => {
            if (select_state[this.smash_tag] !== true) { return };

            config_storage.getState((config_state) => {
                console.log(config_state);
                if (config_state["config"] === "hint") {
                    this.show();
                } else if (config_state["config"] === "auto") {
                    this.solve();
                }
            });
        });
    }

    abstract get_answer(): T;

    abstract show(): void;

    abstract solve(): void;
}
