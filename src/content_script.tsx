import { Solution } from "./solutions/solution";
import { ListeningMultipleChoice } from "./solutions/listening_multiple_choice";

const solutions: Solution[] = [
    new ListeningMultipleChoice(document, "ms-act-section-workbook-card-a-item")
]

for (let solution of solutions){
    if (solution.is_using_solution()){
        solution.solve();
        break;
    }
}
