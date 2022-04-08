import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { calculate_op_time } from "../../utility";

export class Relacionando extends AbstractSolution<number[]> {
    get display_name(): string {
        return "Associate verbs with pronouns";
    }
    get description(): string {
        return "Select cards to associate verbs with their matching pronoun.";
    }

    get smash_tag(): string {
        return "relacionando";
    }

    get_answer(): number[] {
        let answer_cards = document.getElementsByClassName("carousel-item-wrapper");
        let answer_cards_idx = [...answer_cards].map(x => x.getAttribute("data-sequence"));

        let fields = document.getElementsByClassName("activity-o-card-answerzone");
        let fields_idx = [...fields].map(x => x.getAttribute("data-sequence"));

        return fields_idx.map(x => answer_cards_idx.indexOf(x));
    }

    show() {
        let answer_cards = document.getElementsByClassName("carousel-item-wrapper");
        let answer_strings = [...answer_cards].map(x => (x as any).innerText);

        let fields = document.getElementsByClassName("activity-o-card-answerzone");
        let answers: number[] = this.get_answer();
        for (let i = 0; i < fields.length; i++) {
            let answer_string = answer_strings[answers[i]];

            let element = fields[i].parentElement;
            if (element == null) continue;

            element.innerHTML += renderComponentToString(
                <AnswerField answer={answer_string} color="Green" backgroundColor="white" />
            );
        }
    }

    solve() {
        let answer_cards = [...document.getElementsByClassName("carousel-item")];
        let answers: number[] = this.get_answer();
        // for (let i = 0; i < answer_cards.length; i++) {
        //     (answer_cards[answers[i]] as HTMLElement).click();
        // }

        function recursive_click(i: number) {
            (answer_cards[answers[i]] as HTMLElement).click();

            if (i < answer_cards.length - 1) {
                setTimeout(() => {
                    recursive_click(i + 1);
                }, calculate_op_time(4, Math.random() / 10));
            }
        }

        recursive_click(0);
    }
}
