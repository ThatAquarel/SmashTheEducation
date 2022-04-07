import { show_answer } from "../../utility";
import { AbstractSolution } from "../abstract_solution";

export class Ahorcado extends AbstractSolution<string> {
    get display_name(): string {
        return "Drowning";
    }
    get description(): string {
        return "Select letters while a guy is drowning from your mistakes";
    }

    get smash_tag(): string {
        return "ahorcado";
    }

    get_answer(): string {
        throw new Error("Method not implemented.");
    }

    show() {
        let answer_string = this.current_document
            .getElementById("ActivityContent_sequenceAnswer")
            ?.getAttribute("value");
        if (answer_string == null) return;

        show_answer(answer_string);
    }

    solve() {
        return;
    }
}
