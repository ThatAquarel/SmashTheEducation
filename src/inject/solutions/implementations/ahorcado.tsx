import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { showNotification } from "@mantine/notifications";

export class Ahorcado extends AbstractSolution {
    get display_name(): string {
        return "Drowning";
    }
    get description(): string {
        return "Select letters while a guy is drowning from your mistakes";
    }

    get smash_tag(): string {
        return "ahorcado";
    }

    show() {
        let answer_string = this.current_document
            .getElementById("ActivityContent_sequenceAnswer")
            ?.getAttribute("value");
        if (answer_string == null) answer_string = "Could not find answer";

        let element = this.current_document.getElementById("botonesletras");
        if (element == null) return;

        console.log("AAAA");
        console.log(answer_string);

        setTimeout(() => {
            showNotification({
                title: answer_string,
                message: "",
                autoClose: false,
            });
        }, 3000);
    }

    solve() {
        throw new Error("Method not implemented.");
    }
}
