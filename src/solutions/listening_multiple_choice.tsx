import { Solution } from "./solution";

export class ListeningMultipleChoice implements Solution{
    current_document: Document;
    class_name: string;

    constructor(current_document:Document, class_name: string) {
        this.current_document = current_document;
        this.class_name = class_name;
    }


    is_using_solution(): boolean {
        return this.current_document.getElementsByClassName(this.class_name).length !== 0;
    }

    solve(): void {
        let questions = this.current_document.getElementsByClassName(this.class_name);
        for (const question of questions) {

            let answers = question.children;
            for (const answer of answers) {
                let data_answer = answer.getAttribute("data-answer");
                let text_color = ((data_answer === "True") ? "Green" : "Red")

                answer.children[1].innerHTML +=
                    `<p style="color: ${text_color}; font-weight: bold;">${data_answer}</p>`
            }
        }
    }
}
