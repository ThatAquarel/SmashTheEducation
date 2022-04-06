import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class RelacionaImagen extends AbstractSolution {
    get display_name(): string {
        return "Associate text card with images";
    }
    get description(): string {
        return "Select image that best describes the card with text.";
    }

    get smash_tag(): string {
        return "relaciona_imagen";
    }

    _show(): void {
        let fields = this.current_document.getElementsByClassName("activity-o-card-answer");
        for (const field of fields) {
            let answer_string = field.children[1].textContent;
            if (answer_string == null) answer_string = "Could not find answer";

            let element = field.parentElement;
            if (element == null) continue;

            element.innerHTML += renderComponentToString(
                <AnswerField answer={answer_string} color="Green" backgroundColor="white" />
            );
        }
    }

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
