import { ExerciseAssociateImageAudio } from "./solutions/implementations/exercise_associate_image_audio";
import { ExerciseWriteSentenceAudio } from "./solutions/implementations/exercise_write_sentence_audio";
import { ListeningMultipleChoice } from "./solutions/implementations/listening_multiple_choice";
import { ListeningSelectFillWords } from "./solutions/implementations/listening_select_fill_words";
import { Solution } from "./solutions/solution";
import {toggle_answers} from "./functions/toggle_answers";

const solutions: Solution[] = [
    new ListeningMultipleChoice(document),
    new ListeningSelectFillWords(document),
    new ExerciseWriteSentenceAudio(document),
    new ExerciseAssociateImageAudio(document)
]

for (let solution of solutions) {
    if (solution.is_using_solution()) {
        solution.solve();
        break;
    }
}

function keydown(event: KeyboardEvent) {
    if (event.ctrlKey && event.shiftKey && event.key === "Q"){
        console.log("toggle");
        toggle_answers();
    }
}

document.addEventListener('keydown', keydown, false);
