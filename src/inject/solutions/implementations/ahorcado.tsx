import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
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

    _show(): void {
        let answer_string = this.current_document
            .getElementById("ActivityContent_sequenceAnswer")
            ?.getAttribute("value");
        if (answer_string == null) answer_string = "Could not find answer";

        let element = this.current_document.getElementById("botonesletras");
        if (element == null) return;

        element.innerHTML += renderComponentToString(
            <AnswerField answer={answer_string} color="Green" backgroundColor="white" />
        );
    }

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
