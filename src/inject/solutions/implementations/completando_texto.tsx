import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { calculate_op_time } from "../../utility";

export class CompletandoTexto extends AbstractSolution<string[]> {
    get display_name(): string {
        return "Fill blanks in text with cards";
    }
    get description(): string {
        return "Listen to audio and select cards with the missing words";
    }

    get smash_tag(): string {
        return "completando_texto.aspx";
    }

    get_answer(): string[] {
        let fields = [...document.getElementsByClassName("dropzone")];
        return fields.map(x => {
            let str = (x as HTMLElement).getAttribute("word");
            return str == null ? "" : str;
        });
    }

    show() {
        let fields = [...document.getElementsByClassName("dropzone")];
        let answers = this.get_answer();

        fields.map((field, i) => {
            let ans = document.createElement("span");
            ans.innerHTML += renderComponentToString(
                <AnswerField answer={answers[i]} color="Green" />
            );
            field.parentNode?.insertBefore(ans, field.nextSibling);
        });
    }

    solve() {
        let answers = this.get_answer();

        function recursive_click(i: number) {
            let cards = [...document.getElementsByClassName("draggme")];
            let cards_strings = cards.map(x => x.getAttribute("word"));

            let idx = cards_strings.indexOf(answers[i]);
            (cards[idx] as any)?.click();

            if (i < answers.length) {
                setTimeout(() => {
                    recursive_click(i + 1);
                }, calculate_op_time(24, Math.random() / 10));
            }
        }

        recursive_click(0);
    }
}
