import { calculate_op_time } from "../../utility";
import { AbstractSolution } from "../abstract_solution";

export class Interacciones extends AbstractSolution<any> {
    get display_name(): string {
        return "Read out loud conversation";
    }
    get description(): string {
        return "Get embarrassed during study period!";
    }
    get smash_tag(): string {
        return "interacciones";
    }

    get_answer(): any {
        return null;
    }

    show() {
        return;
    }

    solve() {
        let next = [...document.getElementsByClassName("SM2-act-intr-start")][0];
        (next as any)?.click();

        setTimeout(() => {
            setInterval(() => {
                let button_start = [...document.getElementsByClassName("SM2-act-intr-mic-btn")][0];
                (button_start as any).click();

                setTimeout(() => {
                    let button_stop = [...document.getElementsByClassName("SM2-act-intr-mic-stop")][0];
                    (button_stop as any).click();
                }, 500);
            }, calculate_op_time(6, Math.random() / 10));
        }, 500);
    }
}
