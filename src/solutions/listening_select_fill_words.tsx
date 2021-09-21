import { Solution } from "./solution";

export class ListeningSelectFillWords implements Solution{
    current_document: Document;
    class_name: string;

    constructor(current_document:Document, class_name: string) {
        this.current_document = current_document;
        this.class_name = class_name;
    }

    is_using_solution(): boolean {
        return this.current_document.querySelectorAll(`[id^="${this.class_name}"]`).length != 0
    }

    solve(): void {
        let fields = this.current_document.querySelectorAll(`[id^="${this.class_name}"]`);
        for (const field of fields){

            let answer = field.getAttribute("word");
            field.innerHTML += `<p style="color: Green; font-weight: bold;">${answer}</p>`;
        }
    }
}
