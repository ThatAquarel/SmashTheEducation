import { RelacionaImagen } from "./relaciona_imagen";

export class EscuchaSelecciona extends RelacionaImagen {
    get smash_tag(): string {
        return "escucha_selecciona";
    }

    _show(): void {
        throw new Error("Method not implemented.");
    }

    _solve(): void {
        throw new Error("Method not implemented.");
    }
}
