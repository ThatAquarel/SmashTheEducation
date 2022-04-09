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

        let button = getElementByXpath('//*[@id="ActivityTypeTimeImage"]/div/span') as HTMLElement;
        button.click();
        button = getElementByXpath('//*[@id="ConteinerToHide2"]/div/button[1]') as HTMLElement;
        button.click();

        function recursive_click(i : number){
            let answers = questions[i].children;
            for (const answer of answers) {
                for (const answer_id of answers_id){
                    if(Number(answer.getAttribute("data-content")) == answer_id){
                        const c_answers = answer.children;
                        for (const c_answer of c_answers){
                            if (c_answer.hasAttribute("for")){
                                (c_answer as HTMLElement).click();
                                console.log(i);
                                if(i < 11) {
                                    setTimeout(() => {recursive_click(i + 1); }, 10000)
                                    if(i == 9){
                                        button = getElementByXpath('//*[@id="ConteinerToHide2"]/div/button[2]') as HTMLElement;
                                        button.click();
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        recursive_click(0);
    }
}
