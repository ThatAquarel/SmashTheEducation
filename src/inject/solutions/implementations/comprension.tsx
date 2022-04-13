import React from "react";
import { AnswerField, renderComponentToString } from "../answer";
import { AbstractSolution } from "../abstract_solution";
import { getElementByXpath } from "../../utility";

export class Comprension extends AbstractSolution<number[]> {
    get display_name(): string {
        return "Comprehension multiple choice";
    }
    get description(): string {
        return "Select the correct answer of 3 possible answers.";
    }

    get smash_tag(): string {
        return "comprension";
    }

    get_answer(): number[] {
        let responses : number[] = [];
        let questions = this.current_document.getElementsByClassName("ms-act-section-workbook-card-a-item");
        for (const question of questions) {

            let answers = question.children;
            for (const answer of answers) {
                let answer_string = answer.getAttribute("data-answer");
                if (answer_string == null) answer_string = "Could not find answer";

                else if (answer_string == "True") responses.push(Number(answer.getAttribute("data-content")));
            }
        }

        return responses;
    }

    show() {
        let questions = this.current_document.getElementsByClassName("ms-act-section-workbook-card-a-item") as unknown as HTMLElement[];
        for (const question of questions) {

            let answers = question.children;
            for (const answer of answers) {
                let answer_string = answer.getAttribute("data-answer");
                if (answer_string == null) answer_string = "Could not find answer";
                let text_color = ((answer_string === "True") ? "Green" : "Red");

                answer.children[1].innerHTML += renderComponentToString(
                    <AnswerField answer={answer_string} color={text_color} />
                );
            }
        }
    }

    solve() {
        let answers_id = this.get_answer();
        let questions = document.getElementsByClassName("ms-act-section-workbook-card-a-item");

        getElementByXpath('//*[@id="ActivityTypeTimeImage"]/div/span').click();
        getElementByXpath('//*[@id="ConteinerToHide2"]/div/button[1]').click();

        function recursive_click(i : number){
            for (const answer of questions[i].children) {
                if(!answers_id.includes(Number(answer.getAttribute("data-content")))){
                    continue;
                }
                (answer.children[1] as HTMLElement).click();
                if(i < 10) {
                    setTimeout(() => {recursive_click(i + 1); }, 50);
                    return;
                }
                else {
                    getElementByXpath('//*[@id="ConteinerToHide2"]/div/button[2]').click();
                    return;
                }
            }

        }
        
        recursive_click(0);
    }
}
