import { calculate_op_time, show_answer } from "../../utility";
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
        let answer_string = this.current_document
            .getElementById("ActivityContent_sequenceAnswer")
            ?.getAttribute("value");
        if (answer_string == null) return "";
        return answer_string;
    }

    show() {
        show_answer(this.get_answer());
    }

    solve() {
        let keys = [].slice.call(document.getElementsByClassName("ui-button-text"));
        let keyboard: { [id: string]: HTMLElement } = {}

        keys.map((button) => {
            keyboard[(button as any).innerText.toLowerCase()] = button;
        });

        let answer = this.get_answer().toLowerCase();
        let written_letters: string[] = [];

        function recursive_type(i: number) {
            let char = answer.charAt(i);
            while (written_letters.includes(char)) {
                i++;
                char = answer.charAt(i);
            }

            if (char in keyboard) {
                keyboard[char].click();
                written_letters.push(char);
            }

            if (i < answer.length - 1) {
                setTimeout(() => {
                    recursive_type(i + 1);
                }, calculate_op_time(1, Math.random() / 10));
            }
        }

        recursive_type(0);
    }
}
