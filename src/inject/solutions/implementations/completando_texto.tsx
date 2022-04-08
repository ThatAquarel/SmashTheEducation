import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { calculate_op_time } from "../../utility";

export class CompletandoTexto extends AbstractSolution<string[]> {
    get display_name(): string {
        return "Fill blanks in text";
    }
    get description(): string {
        return "Listen to audio and fill in the missing words";
    }

    get smash_tag(): string {
        return "completando_texto";
    }

    get_answer(): string[] {
        let fields = this.current_document.getElementsByClassName("hidden");
        return [...fields].map(x => x.textContent == null ? "" : x.textContent);
    }

    show() {
        let fields = this.current_document.getElementsByClassName("hidden");

        for (const field of fields) {
            let answer_string = field.textContent;
            if (answer_string == null) answer_string = "Could not find answer";

            let element = field.parentElement;
            if (element == null) continue;

            element.innerHTML += renderComponentToString(
                <AnswerField answer={answer_string} color="Green" />
            );
        }
    }

    solve() {
        let answer = this.get_answer();
        let fields = [...document.getElementsByClassName("textarea")];

        function recursive_type(i: number) {
            if (i === (answer.length - 1)) {
                document.getElementById("ActivityContent_sendAnswers")?.click();
                return;
            }

            if (fields[i] != null) {
                (fields[i] as HTMLInputElement).textContent = answer[i];
            }

            if (i < (answer.length - 1)) {
                setTimeout(() => {
                    recursive_type(i + 1);
                }, calculate_op_time(24, Math.random() / 10));
            }
        }

        recursive_type(0);
    }
}
