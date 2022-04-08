import { calculate_op_time } from "../../utility";
import { AbstractSolution } from "../abstract_solution";

export class PalabrasRecordar extends AbstractSolution<any> {
    get display_name(): string {
        return "Read out loud";
    }
    get description(): string {
        return "Get embarrassed during study period!";
    }

    get smash_tag(): string {
        return "palabras_recordar";
    }

    get_answer(): any {
        return null;
    }

    show() {
        return;
    }

    solve() {
        let next = document.getElementById("A_ActivityNextContent");
        next?.click();

        setTimeout(() => {
            setInterval(() => {
                let button_start = [...document.getElementsByClassName("btn_pronuncia")][0];
                (button_start as any).click();

                setTimeout(() => {
                    let button_stop = [...document.getElementsByClassName("btn_stop")][0];
                    (button_stop as any).click();
                }, 1000);
            }, calculate_op_time(6, Math.random() / 10));
        }, 500);
    }
}
