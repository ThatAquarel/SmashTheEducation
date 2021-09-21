import { Solution } from "./solution";

export class ListeningMultipleChoice extends Solution{
    get class_name(): string {
        return "comprension_oral_larga";
    }

    solve(): void {
        let questions = this.current_document.getElementsByClassName("ms-act-section-workbook-card-a-item");
        for (const question of questions) {

            let answers = question.children;
            for (const answer of answers) {
                let data_answer = answer.getAttribute("data-answer");
                let text_color = ((data_answer === "True") ? "Green" : "Red");

                answer.children[1].innerHTML +=
                    `<p style="color: ${text_color}; font-weight: bold;">${data_answer}dsadkfljsdfk</p>`;
            }
        }
    }
}
