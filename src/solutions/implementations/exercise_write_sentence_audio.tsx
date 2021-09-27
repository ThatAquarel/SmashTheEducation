import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class ExerciseWriteSentenceAudio extends AbstractSolution {
    get name(): string {
        return "ExerciseWriteSentenceAudio";
    }

    _solve(): void {
        let answer_string = this.current_document.getElementById("C_Ans")?.innerText;
        if (answer_string == null) answer_string = "Could not find answer";

        let field = document.getElementsByClassName("respuesta")[0];

        field.innerHTML += renderComponentToString(
            <AnswerField answer={answer_string} color="Green" />
        );
    }
}
