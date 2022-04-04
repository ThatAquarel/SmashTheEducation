import { loadFunctionality } from "../functions/save_functionality";

export abstract class AbstractSolution {
    readonly current_document: Document;

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

    abstract _show_answer(): void;
    show_answer(): void {
        loadFunctionality(this.smash_tag, (state) => {
            if (state) this._show_answer();
        });
    }

    abstract _solve(): void;
    solve(): void {

    }
}
