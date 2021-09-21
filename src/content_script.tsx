let listening_questions = document.getElementsByClassName("ms-act-section-workbook-card-a-item");

for (const question of listening_questions) {
    let answers = question.children;
    for (const answer of answers) {
        let data_answer = answer.getAttribute("data-answer");
        let text_color = ((data_answer === "True") ? "Green" : "Red")

        answer.children[1].innerHTML +=
            `<p style="color: ${text_color}; font-weight: bold;">${data_answer}</p>`
    }
}
