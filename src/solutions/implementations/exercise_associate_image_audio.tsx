import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class ExerciseAssociateImageAudio extends AbstractSolution {
    get class_name(): string {
        return "relaciona_imagen";
    }

    solve(): void {
        let fields = document.getElementsByClassName("carousel-item");
        for (const field of fields) {

            let answer_string = field.children[0].children[1].textContent;
            if (answer_string == null) answer_string = "Could not find answer";

            let element = field.parentElement?.parentElement;
            if (element == null) continue;

            element.innerHTML += renderComponentToString(
                <AnswerField answer={answer_string} color="Green" backgroundColor="white" />
            );
        }
    }
}
