import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class Relacionando extends AbstractSolution {
    get display_name(): string {
        return "Associate verbs with pronouns";
    }
    get description(): string {
        return "Select cards to associate verbs with their matching pronoun.";
    }

    get smash_tag(): string {
        return "relacionando";
    }

    show() {
        let answer_cards = this.current_document.getElementsByClassName("carousel-item-wrapper");
        let answer_cards_idx = [...answer_cards].map(x => x.getAttribute("data-sequence"));

        let fields = this.current_document.getElementsByClassName("activity-o-card-answerzone");

        for (const field of fields) {
            let card_idx = field.getAttribute("data-sequence");
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

   solve(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}
