// import { toggle_answers } from "../functions/toggle_answers";
import { instances } from "./solutions/solutions";

for (let solution of instances) {
    if (solution.is_using_solution()) {
        solution.show();
        break;
    }
}

function keydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === "Q") {
        // toggle_answers();
    }
}

document.addEventListener('keydown', keydown, false);
