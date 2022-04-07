import { ConfigStorage } from "../../popup/storage/config_storage";

const config_storage = new ConfigStorage();

export abstract class AbstractSolution {
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
        config_storage.getState((state) => {
            if (state["config"] === "hint") {
                this.show();
            } else if (state["config"] === "auto") {
                this.solve();
            }
        });
    }

    abstract show(): JSX.Element;

    abstract solve(): JSX.Element;
}
