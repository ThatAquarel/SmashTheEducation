import { answer_class } from "../solutions/answer";

export function toggle_answers() {
    let answers = document.getElementsByClassName(answer_class);

    for (const answer of answers) {
        if (!(answer instanceof HTMLElement)) continue;
        
        let display = answer.style.display;

        if (display === "") answer.style.display = "none";
        else if (display === "none") answer.style.display = "";
    }
}
