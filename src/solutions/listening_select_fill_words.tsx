import { Solution } from "./solution";

export class ListeningSelectFillWords extends Solution{
    get class_name(): string {
        return "completando_texto";
    }

    solve(): void {
        let fields = this.current_document.querySelectorAll('[id^="resultBox_"]');
        for (const field of fields){

            let answer = field.getAttribute("word");
            field.innerHTML += `<p style="color: Green; font-weight: bold;">${answer}kkj</p>`;
        }
    }
}
