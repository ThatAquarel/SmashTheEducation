export const class_names_dict: { [index: string]: string } = {
    ExerciseAssociateImageAudio: "relaciona_imagen",
    ExerciseWriteSentenceAudio: "foto_texto_escribe",
    ListeningMultipleChoice: "comprension_oral_larga",
    ListeningSelectFillWords: "completando_texto"
}

export const class_names = Object.keys(class_names_dict).map((key) => { 
    return class_names_dict[key] 
});
