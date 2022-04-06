export abstract class AbstractSolution {
    readonly current_document: Document;

    abstract get display_name(): string;
    abstract get description(): string;

    abstract get smash_tag(): string;

    constructor(current_document: Document) {
        this.current_document = current_document;
    }

    is_show(state: { [id: string]: boolean }): boolean | null {
        if ("show" in state) {
            return state["show"];
        } else {
            return null;
        }
    }

    is_using_solution(): boolean {
        let action = document.querySelector('form[action]')?.getAttribute("action");
        if (action?.includes(this.smash_tag)) {
            return true;
        } else {
            return false;
        }
    };

    abstract _show(): void;
    show(): void {
    }

    abstract _solve(): void;
    solve(): void {
    }
}
