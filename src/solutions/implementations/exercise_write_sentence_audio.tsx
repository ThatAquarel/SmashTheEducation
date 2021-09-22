import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { Solution } from "../solution";

export class ExerciseWriteSentenceAudio extends Solution{
    get class_name(): string {
        return "foto_texto_escribe";
    }

    solve(): void {
        let answer_string = this.current_document.getElementById("C_Ans")?.innerText;
        if (answer_string == null) answer_string = "Could not find answer";

        let field = document.getElementsByClassName("respuesta")[0];

        field.innerHTML += renderComponentToString(
            <AnswerField answer={answer_string} color="Green"/>
        );
    }
}
