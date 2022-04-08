import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { calculate_op_time } from "../../utility";

export class RelacionaImagen extends AbstractSolution<string[]> {
    get display_name(): string {
        return "Associate text card with images";
    }
    get description(): string {
        return "Select image that best describes the card with text.";
    }

    get smash_tag(): string {
        return "relaciona_imagen";
    }

    get_answer(): string[] {
        let fields = this.current_document.getElementsByClassName("activity-o-card-answer");
        return [...fields].map(field => field.children[1].textContent === null ? "" : field.children[1].textContent);
    }

    show() {
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

    solve() {
        let fields = this.current_document.getElementsByClassName("activity-o-card-answer");
        let answers = this.get_answer();

        for (let i = 0; i < answers.length; i++) {

        }

        function recursive_click(i: number) {
            let current: string = ([...document.getElementsByClassName("active carousel-item-wrapper")][0] as any).innerText

            for (const field of fields) {
                if (field.children[1].textContent === current) {
                    field.parentElement?.click();
                }
            }

            if (i < answers.length) {
                setTimeout(() => {
                    recursive_click(i + 1);
                }, calculate_op_time(12, Math.random() / 10));
            }
        }

        recursive_click(0);
    }
}
