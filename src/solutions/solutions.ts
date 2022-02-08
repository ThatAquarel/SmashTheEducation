import { AbstractSolution } from "./abstract_solution";
import { RelacionaImagen } from "./implementations/relaciona_imagen";
import { FotoTextoEscribe } from "./implementations/foto_texto_escribe";
import { Comprension } from "./implementations/comprension";
import { CompletandoTexto } from "./implementations/completando_texto";
import { Relacionando } from "./implementations/relacionando";
import { EscuchaSelecciona } from "./implementations/escucha_selecciona";

export const instances: AbstractSolution[] = [
    new RelacionaImagen(document),
    new Relacionando(document),
    new FotoTextoEscribe(document),
    new Comprension(document),
    new CompletandoTexto(document),
    new EscuchaSelecciona(document),
]

// To add more implementations, just add them to the instances array.
// Also add the smash_tag to the list of smash_tags in the background.ts file.
// Make sure they are in the same order as the instances array.
