import React from "react";
import { AnswerField, renderComponentToString } from "./answer";
import { Solution } from "./solution";

export class ListeningSelectFillWords extends Solution {
    get class_name(): string {
        return "completando_texto";
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
