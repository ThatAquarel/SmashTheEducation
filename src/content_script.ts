import { toggle_answers } from "./functions/toggle_answers";
import { Solution } from "./solutions/solution";

for (let solution of Solution.get_instances()) {
    if (solution.is_using_solution()) {
        solution.solve();
        break;
    }
}

function keydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === "Q") {
        toggle_answers();
    }
}

document.addEventListener('keydown', keydown, false);
