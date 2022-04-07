import { show_answer } from "../../notifications";
import { AbstractSolution } from "../abstract_solution";

export class Ahorcado extends AbstractSolution {
    get display_name(): string {
        return "Drowning";
    }
    get description(): string {
        return "Select letters while a guy is drowning from your mistakes";
    }

    get smash_tag(): string {
        return "ahorcado";
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
