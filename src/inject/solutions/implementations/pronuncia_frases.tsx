import { PalabrasRecordar } from "./palabras_recordar";

export class PronunciaFrases extends PalabrasRecordar {
    get display_name(): string {
        return "Read sentences out loud";
    }
    get description(): string {
        return "Get embarrassed during study period!";
    }

    get smash_tag(): string {
        return "pronuncia_frases";
    }
}