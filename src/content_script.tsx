import { Solution } from "./solutions/solution";
import { ListeningMultipleChoice } from "./solutions/listening_multiple_choice";
import { ListeningSelectFillWords } from "./solutions/listening_select_fill_words";

const solutions: Solution[] = [
    new ListeningMultipleChoice(document, "ms-act-section-workbook-card-a-item"),
    new ListeningSelectFillWords(document, "resultBox_")
]

for (let solution of solutions){
    if (solution.is_using_solution()){
        solution.solve();
        break;
    }
}
