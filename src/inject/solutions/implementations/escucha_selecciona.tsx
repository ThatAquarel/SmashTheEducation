import { calculate_op_time } from "../../utility";
import { RelacionaImagen } from "./relaciona_imagen";

export class EscuchaSelecciona extends RelacionaImagen {
    get display_name(): string {
        return "Associate audio with images";
    }
    get description(): string {
        return "Select image that best describes the audio.";
    }

    get smash_tag(): string {
        return "escucha_selecciona";
    }

    solve() {
        let fields = document.getElementsByClassName("activity-o-card-answer");
        let answers = this.get_answer();

        for (let i = 0; i < answers.length; i++) {

        }

        function recursive_click(i: number) {
            let current: string| null = [...document.querySelectorAll(".active p")][0].textContent;
            if (current == null) return;

            for (const field of fields) {
                if (field.children[1].textContent === current) {
                    field.parentElement?.click();
                }
            }

            if (i < answers.length) {
                setTimeout(() => {
                    recursive_click(i + 1);
                }, calculate_op_time(12, Math.random() / 10));
            }
        }

        recursive_click(0);
    }
}
