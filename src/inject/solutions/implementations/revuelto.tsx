import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class Revuelto extends AbstractSolution {
    get display_name(): string {
        return "Reorder sentence";
    }
    get description(): string {
        return "Select the cards of the sentence parts in the correct order.";
    }

    get smash_tag(): string {
        return "revuelto";
    }

    _show(): void {
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

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
