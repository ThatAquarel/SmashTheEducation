import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class Comprension extends AbstractSolution {
    get smash_tag(): string {
        return "comprension";
    }

    _show(): void {
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

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
