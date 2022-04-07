import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class Comprension extends AbstractSolution {
    get display_name(): string {
        return "Comprehension multiple choice";
    }
    get description(): string {
        return "Select the correct answer of 3 possible answers.";
    }

    get smash_tag(): string {
        return "comprension";
    }

    show() {
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

   solve(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}
