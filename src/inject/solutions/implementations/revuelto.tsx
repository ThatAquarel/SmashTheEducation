import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { calculate_op_time } from "../../utility";

export class Revuelto extends AbstractSolution<number[]> {
    get display_name(): string {
        return "Reorder sentence";
    }
    get description(): string {
        return "Select the cards of the sentence parts in the correct order.";
    }

    get smash_tag(): string {
        return "revuelto";
    }

    get_answer(): number[] {
        let answer_cards = document.getElementsByClassName("SM2-act-relItem");
        let answer_cards_idx = [...answer_cards].map(x => x.getAttribute("sequence"));

        let fields = document.getElementsByClassName("dropzone");
        let fields_idx = [...fields].map(x => x.getAttribute("sequence"));

        return fields_idx.map(x => answer_cards_idx.indexOf(x));
    }

    show() {
        let answer_cards = this.current_document.getElementsByClassName("SM2-act-relItem");
        let answer_cards_idx = [...answer_cards].map(x => x.getAttribute("sequence"));

        let fields = this.current_document.getElementsByClassName("dropzone");

        for (const field of fields) {
            let card_idx = field.getAttribute("sequence");
            if (card_idx == null) continue;

            let answer_card = answer_cards[answer_cards_idx.indexOf(card_idx)];
            let answer_string = answer_card.textContent?.trim();
            if (answer_string == null) answer_string = "Could not find answer";

            let element = field.parentElement;
            if (element == null) continue;

            element.innerHTML += renderComponentToString(
                <AnswerField answer={answer_string} color="Green" backgroundColor="white" />
            );
        }
    }

    solve() {
        let answer_cards = document.getElementsByClassName("SM2-act-relItem");
        let answers: number[] = this.get_answer();
        let card_sequence = answers.map((x) => {
            return answer_cards[x].getAttribute("sequence");
        });

        function recursive_click(i: number) {
            let answer_cards = [...document.getElementsByClassName("SM2-act-relItem")];
            answer_cards.map((x) => {
                if (x.getAttribute("sequence") === card_sequence[i]) {
                    (x as any).click();
                }
            });

            if (i < card_sequence.length - 1) {
                setTimeout(() => {
                    recursive_click(i + 1);
                }, calculate_op_time(4, Math.random() / 10));
            }
        }

        recursive_click(0);
    }
}
