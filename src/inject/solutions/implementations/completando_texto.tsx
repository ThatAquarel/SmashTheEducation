import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class CompletandoTexto extends AbstractSolution {
    get display_name(): string {
        return "Fill blanks in text";
    }
    get description(): string {
        return "Listen to audio and fill in the missing words";
    }

    get smash_tag(): string {
        return "completando_texto";
    }

    _show(): void {
        // let fields = this.current_document.querySelectorAll('[id^="resultBox_"]');
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

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
