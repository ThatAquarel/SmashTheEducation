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

    show(): JSX.Element {
        let answer_string = this.current_document
            .getElementById("ActivityContent_sequenceAnswer")
            ?.getAttribute("value");
        if (answer_string == null) answer_string = "Could not find answer";

        let element = this.current_document.getElementById("botonesletras");
        if (element == null) return;

        console.log("AAAA");
        console.log(answer_string);


        showNotification({
            title: "Answer",
            message: answer_string,
            autoClose: false,
        });
    }

    solve(): JSX.Element {
        throw new Error("Method not implemented.");
    }
}
