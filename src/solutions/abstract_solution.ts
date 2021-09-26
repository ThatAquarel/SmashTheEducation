import { class_names_dict } from "./class_names";

export abstract class AbstractSolution {
    readonly current_document: Document;

    abstract get name(): string;

    get class_name(): string {
        return class_names_dict[this.name];
    };

    constructor(current_document: Document) {
        this.current_document = current_document;
    }

    is_using_solution(): boolean {
        let action = document.querySelector('form[action]')?.getAttribute("action");
        if (action?.includes(this.class_name)) {
            return true;
        } else {
            return false;
        }
    };

    abstract solve(): void;
}
