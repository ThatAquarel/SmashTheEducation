import React from "react";
import { AnswerField, renderComponentToString } from "./answer";
import { Solution } from "./solution";

export class ListeningMultipleChoice extends Solution {
    get class_name(): string {
        return "comprension_oral_larga";
    }

    solve(): void {
        let questions = this.current_document.getElementsByClassName("ms-act-section-workbook-card-a-item");
        for (const question of questions) {

            let answers = question.children;
            for (const answer of answers) {
                let answer_string = answer.getAttribute("data-answer");
                if (answer_string == null) answer_string = "Could not find answer";
                let text_color = ((answer_string === "True") ? "Green" : "Red");

                answer.children[1].innerHTML += renderComponentToString(
                    <AnswerField answer={answer_string} color={text_color} />
                );
            }
        }
    }
}
