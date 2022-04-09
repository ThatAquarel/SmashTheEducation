import { AbstractSolution } from "./abstract_solution";
import { RelacionaImagen } from "./implementations/relaciona_imagen";
import { FotoTextoEscribe } from "./implementations/foto_texto_escribe";
import { Comprension } from "./implementations/comprension";
import { CompletandoTextoEscribe } from "./implementations/completando_texto_escribe";
import { Relacionando } from "./implementations/relacionando";
import { EscuchaSelecciona } from "./implementations/escucha_selecciona";
import { Revuelto } from "./implementations/revuelto";
import { Ahorcado } from "./implementations/ahorcado";
import { PalabrasRecordar } from "./implementations/palabras_recordar";
import { PronunciaFrases } from "./implementations/pronuncia_frases";
import { Interacciones } from "./implementations/interacciones";
import { CompletandoTexto } from "./implementations/completando_texto";

export const instances: AbstractSolution<any>[] = [
    new RelacionaImagen(document),
    new Relacionando(document),
    new FotoTextoEscribe(document),
    new Comprension(document),
    new CompletandoTextoEscribe(document),
    new CompletandoTexto(document),
    new EscuchaSelecciona(document),
    new Revuelto(document),
    new Ahorcado(document),
    new PalabrasRecordar(document),
    new PronunciaFrases(document),
    new Interacciones(document)
]

// To add more implementations, just add them to the instances array.
// Also add the smash_tag to the list of smash_tags in the background.ts file.
// Make sure they are in the same order as the instances array.
