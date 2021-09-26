import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";

export class ListeningSelectFillWords extends AbstractSolution {
    get name(): string {
        return "ListeningSelectFillWords";
    }

    solve(): void {
        let fields = this.current_document.querySelectorAll('[id^="resultBox_"]');
        for (const field of fields) {

            let answer_string = field.getAttribute("word");
            if (answer_string == null) answer_string = "Could not find answer";

            field.innerHTML += renderComponentToString(
                <AnswerField answer={answer_string} color="Green" />
            );
        }
    }
}
