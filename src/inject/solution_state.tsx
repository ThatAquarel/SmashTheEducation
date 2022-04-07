import React from "react";
import { instances } from "./solutions/solutions";

// function keydown(event: KeyboardEvent) {
//     if (event.ctrlKey && event.shiftKey && event.key === "Q") {
//         // toggle_answers();
//     }
// }

// document.addEventListener('keydown', keydown, false);

function ready() {
    for (let solution of instances) {
        if (solution.is_using_solution()) {
            solution.solution();
            break;
        }
    }
}

export class SolutionState extends React.Component {
    render(): React.ReactNode {
        return <div />;
    }

    componentDidMount(): void {
        ready();
    }
}
