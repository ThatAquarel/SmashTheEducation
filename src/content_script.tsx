import { Solution } from "./solutions/solution";
import { ListeningMultipleChoice } from "./solutions/implementations/listening_multiple_choice";
import { ListeningSelectFillWords } from "./solutions/implementations/listening_select_fill_words";
import { ExerciseWriteSentenceAudio } from "./solutions/implementations/exercise_write_sentence_audio";
import { ExerciseAssociateImageAudio } from "./solutions/implementations/exercise_associate_image_audio";

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
