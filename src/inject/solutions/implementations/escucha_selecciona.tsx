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

    // get_answer(): any {
    //     throw new Error("Method not implemented.");
    // }

    show() {
        return;
    }

    solve() {
        return;
    }
}
