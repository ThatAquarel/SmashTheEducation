import { AbstractSolution } from "./abstract_solution";
import { class_names } from "./class_names";
import { ExerciseAssociateImageAudio } from "./implementations/exercise_associate_image_audio";
import { ExerciseWriteSentenceAudio } from "./implementations/exercise_write_sentence_audio";
import { ListeningMultipleChoice } from "./implementations/listening_multiple_choice";
import { ListeningSelectFillWords } from "./implementations/listening_select_fill_words";

export namespace Solution {
    const instances: AbstractSolution[] = [
        new ExerciseAssociateImageAudio(document),
        new ExerciseWriteSentenceAudio(document),
        new ListeningMultipleChoice(document),
        new ListeningSelectFillWords(document)
    ]

    export function get_instances(): AbstractSolution[] {
        instances.map((instance, i)=>{
            if (instance.class_name != class_names[i]){
                throw new Error("Solution class_names order mismatch");
            }
        });

        return instances;
    }
}
