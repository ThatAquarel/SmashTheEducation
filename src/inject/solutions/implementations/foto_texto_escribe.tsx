import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { random_human_delay } from "../../utility";

export class FotoTextoEscribe extends AbstractSolution<string> {
    get display_name(): string {
        return "Fill blank with word";
    }
    get description(): string {
        return "Listen to audio and fill in the blank.";
    }

    get smash_tag(): string {
        return "foto_texto_escribe";
    }

    get_answer(): string {
        let answer_string = this.current_document.getElementById("C_Ans")?.innerText;
        if (answer_string == null) return "";

        return answer_string;
    }

    show() {
        let field = document.getElementsByClassName("respuesta")[0];
        field.innerHTML += renderComponentToString(
            <AnswerField answer={this.get_answer()} color="Green" />
        );
    }

    solve() {
        let answer_string = this.get_answer();

        let text_area = document.getElementById("Textarea");
        if (text_area == null) return;

        text_area.innerText = answer_string;
        random_human_delay(answer_string.length, () => {
            let button = document.getElementById("verified");
            if (button == null) return;
            button.click();
        });
    }
}
