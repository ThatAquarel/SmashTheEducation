import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class FotoTextoEscribe extends AbstractSolution {
    get display_name(): string {
        return "Fill blank with word";
    }
    get description(): string {
        return "Listen to audio and fill in the blank.";
    }

    get smash_tag(): string {
        return "foto_texto_escribe";
    }

    _show(): void {
        let answer_string = this.current_document.getElementById("C_Ans")?.innerText;
        if (answer_string == null) answer_string = "Could not find answer";

        let field = document.getElementsByClassName("respuesta")[0];

        field.innerHTML += renderComponentToString(
            <AnswerField answer={answer_string} color="Green" />
        );
    }

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
